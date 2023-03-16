// Importa archivo js de productos(arreglo)

import Productos from './Productos.js';

// Variables

const contenedorProductos = document.querySelector('.contenedorCards');
const contenedorCarrito = document.querySelector('#cardTotalizador');
const iconoCarrito = document.querySelectorAll('.iconoCarrito');

// Si hay elementos en local storage, remplaza el Carrito []
let Carrito = JSON.parse(localStorage.getItem('Carrito')) || [];

// Completa información de productos en card

const RellenarProductos = (Productos) => { 
  Productos.forEach((producto) => {
    const { codigo, descripcion, imagen, nombre, precio, precioCalculado } = producto;
    const div = document.createElement('div');
    div.classList = 'col g-5 hidden';
    div.innerHTML = `
      <div class="card">
          <img src="${imagen}" class="card-img-top" alt="Productos" />
          <div class="card-body">
            <h5 class="card-title card__name">${nombre}</h5>
            <p class="cod_producto">Código: ${codigo}</p>
            <p class="card-text card__description">${descripcion}</p>
            <p class="price_producto">${precio}</p>
            <p class="price" hidden>${precioCalculado}</p>
            <label class="form-label" for="cantProducto">Cantidad:<input type="number" value = "1" class="form-control" min="0" /></label>
          </div>
          <div class="card__end">
            <a href="#" class="button--secondary button--card">Agregar al Carro</a>
          </div>
      </div>
    `;
    contenedorProductos.appendChild(div);
  });
};

if (contenedorProductos) {
  RellenarProductos(Productos);
}


//Contenedor de las Cards
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    contenedorCarrito.classList.remove('contCarritoHide');
    e.preventDefault();
    if (e.target.classList.contains('button--secondary')) {
      let nombre = e.currentTarget.querySelector('.card-title').textContent;
      let codigoProducto = e.currentTarget.querySelector('.cod_producto').textContent;
      let imagenProducto = e.currentTarget.querySelector('img').src;
      let valorProducto = e.currentTarget.querySelector('.price').textContent;
      let cantidad = e.currentTarget.querySelector('input');
      AgregarAlCarrito( nombre, codigoProducto, imagenProducto, valorProducto, Number(cantidad.value));
      MostrarCarrito(Carrito);
    }
  });
});


//Arreglo del carrito de compras

const AgregarAlCarrito = (nombre, codigoProducto, imagenProducto, valorProducto, cantidad ) => {
  // Some revisa si el producto esta en el carrito , si es true se ejecuta Editar carrito (aumenta cantidad) si no, se ejecuta Push y se agrega al carrito
  if (cantidad > 0 && (Carrito.some((producto) => producto.codigoProducto == codigoProducto))) {
    EditarCarrito(codigoProducto, Carrito, cantidad);
  } else if (cantidad>0) {
    Carrito.push({nombre, codigoProducto, imagenProducto, valorProducto, cantidad});   
  }
};

// Contenedor carrito

const MostrarCarrito = (Carrito) => {
  
  // Agregar al local storage
  localStorage.setItem('Carrito', JSON.stringify(Carrito));

  //Limpiar carrito

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
  const div = document.createElement('div');
  div.classList = 'titulocarrito';
  div.innerHTML = `
    <p>Producto</p>
    <p>Cantidad</p>  
    <p>Valor Total</p>
    <p>Modificar  </p>
  `;
  contenedorCarrito.appendChild(div);

  //Mostar los productos en el carrito

  if (Carrito) {
    Carrito.forEach((productoCarrito, i) => {              
      const { nombre, valorProducto, imagenProducto, cantidad} = productoCarrito;
      let valorFinal = cantidad*valorProducto;
      const div = document.createElement('div');
      div.classList = 'card-producto';
      div.innerHTML = `
      <div class="imagenyTitulo" >
        <h5 class = "tituloEnCarro">${nombre}</h5>
        <img src="${imagenProducto}" alt="${nombre}" />
      </div>
      <div class="centradoFlex" >
        <p class= "cantidadenCarrito">${cantidad}</p>  
        <div class="modificaCantidad" >
          <p class = "sumaCantidadCarrito" onclick="sumarCantidad(${i})">+</p>  
          <p class = "restaCantidadCarrito" onclick="restarCantidad(${i})">-</p>  
        </div>
      </div>
      <p>${valorFinal}</p>
      <ion-icon id="eliminarEnCarrito" name="trash-outline" onclick="borrarElemento(${i})"></ion-icon>
        `;

        // Lo borra si queda vacío
        if (cantidad === 0) {
          div.innerHTML = "";
        }

        const totalizador = document.createElement('div');
          totalizador.classList = 'total';
          totalizador.innerHTML = `
            <p class= "montoaPagar">Subtotal:</p>
            <p class= "montoaPagar">Impuesto: </p>  
            <p class= "montoaPagar">Total: </p>
            <a class= "finalizaCompra"  href= "./formulario-compra.html">Finalizar Compra</a>
          `;
        contenedorCarrito.appendChild(div);    
      }); 
    } 

    //Mostrar valores en el carrito

  let Subtotal = 0;

  Carrito.forEach((productoCarro) => {
    const { cantidad, valorProducto } = productoCarro;
    Subtotal += valorProducto * cantidad;
  });

  let Impuestos = Subtotal * 0.19;
  let Total = Subtotal + Impuestos;
  if (Total < 100000) {
    Total += Total * 0.05;
  }

  // formatear dinero
  const formatearDinero = (dinero) => {
    return new Intl.NumberFormat('ES', {
      style: 'currency',
      currency: 'clp'
    }).format(dinero);
  };

  // Calculo de Totales!
  const totalizador = document.createElement('div');
  totalizador.classList = 'total';
  totalizador.innerHTML = `
      <p class= "montoaPagar">Subtotal: $${formatearDinero(Subtotal)} </p>
      <p class= "montoaPagar">Impuesto: $${formatearDinero(Impuestos)} </p>  
      <p class= "montoaPagar">Total: $${formatearDinero(Total)} </p>
      <a class = "finalizaCompra"  href= "./formulario-compra.html">Finalizar Compra</a>
    `;
  contenedorCarrito.appendChild(totalizador);


//Areglo valores finales

const valoresFinales = [{
Subtotal,
Impuestos,
Total,
}];

    // Agregar al local storage
    localStorage.setItem('valoresFinales', JSON.stringify(valoresFinales));
    //Obtener del local storage
    let valorFinal = JSON.parse(localStorage.getItem('valoresFinales'));

};
  
//Muestra u oculta el contenedor del carrito
iconoCarrito.forEach((carrito) => {
  carrito.addEventListener('click', () => {
    contenedorCarrito.classList.toggle('contCarritoHide');
    // Carga  los datos del local storage
    MostrarCarrito(Carrito);
    
    // Si el carrito no tiene elementos, agrega "no hay productos"
    if (!contenedorCarrito.firstChild) {
      const p = document.createElement('p');
      p.textContent = ' No hay productos en el carrito';
      contenedorCarrito.append(p);
    }
  });
})

// Editar carrito recibe  el id(codigoPorducto), el arreglo y la cantidad que se irá actualizando

const EditarCarrito = (id, Carrito, cantidad) => {
  const encontrado = Carrito.find(
    (productoCarrito) => productoCarrito.codigoProducto == id);
  if (encontrado) {
    encontrado.cantidad += cantidad;
  }
  return Carrito;
};

// Modifica cantidades

window.sumarCantidad = (e) => {
  Carrito[e].cantidad++;
  MostrarCarrito(Carrito);
}

window.restarCantidad = (e) => {
  Carrito[e].cantidad--;
  if (Carrito[e].cantidad == 0){
    borrarElemento(e);
  }
  MostrarCarrito(Carrito);
}

window.borrarElemento = (e) => {
  Carrito.splice(e,1);
  MostrarCarrito(Carrito);

}


  //Mostar los productos en el formulario-compra

let contenedorResumenCarrito = document.getElementById("contenedor-resumen");

contenedorResumenCarrito.appendChild(contenedorCarrito);

MostrarCarrito(Carrito);






