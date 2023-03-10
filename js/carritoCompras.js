// Importa archivo js de productos(arreglo)

import Productos from './Productos.js';

// Variables

const contenedorProductos = document.querySelector('.contenedorCards');
const contenedorCarrito = document.querySelector('#cardTotalizador');

let Carrito = [];

// Completa información de productos en card

const RellenarProductos = (Productos) => { 
  Productos.forEach((producto) => {
    const { codigo, descripcion, imagen, nombre, precio } = producto;
    const div = document.createElement('div');
    div.classList = 'col g-5 ';
    div.innerHTML = `
      <div class="card">
          <img src="${imagen}" class="card-img-top" alt="Productos" />
          <div class="card-body">
            <h5 class="card-title card__name">${nombre}</h5>
            <p class="cod_producto">Código: ${codigo}</p>
            <p class="card-text card__description">${descripcion}</p>
            <p class="price_producto">Precio: $${precio}</p>
            <label class="form-label" for="cantProducto">Cantidad:<input type="number" value = "1" class="form-control" /></label>
          </div>
          <div class="card__end">
            <a href="#" class="button--secondary button--card">Add to cart</a>
          </div>
      </div>
    `;
    contenedorProductos.appendChild(div);
  });
};

RellenarProductos(Productos);

//Contenedor de las Cards
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--secondary')) {
      let nombre = e.currentTarget.querySelector('.card-title').textContent;
      let codigoProducto = e.currentTarget.querySelector('.cod_producto').textContent;
      let imagenProducto = e.currentTarget.querySelector('img').src;
      let valorProducto = e.currentTarget.querySelector('.price_producto').textContent;
      let cantidad = e.currentTarget.querySelector('input');
      AgregarAlCarrito( nombre, codigoProducto, imagenProducto, valorProducto, Number(cantidad.value));
      MostrarCarrito(Carrito);
    }
  });
});

//Arreglo del carrito de compras

const AgregarAlCarrito = (nombre, codigoProducto, imagenProducto, valorProducto, cantidad ) => {
  // Some revisa si el producto esta en el carrito , si es true se ejecuta Editar carrito (aumenta cantidad) si no, se ejecuta Push y se agrega al carrito
  if (Carrito.some((producto) => producto.codigoProducto == codigoProducto)) {
    EditarCarrito(codigoProducto, Carrito, cantidad);
  } else {
    Carrito.push({nombre, codigoProducto, imagenProducto, valorProducto, cantidad});
  }
};

// Contenedor carrito

const MostrarCarrito = (Carrito) => {
  //Limpiar carrito
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
  const div = document.createElement('div');
  div.classList = 'titulocarrito';
  div.innerHTML = `
    <p>Producto</p>
    <p>Cantidad</p>  
    <p>Precio Total</p>
  `;
  contenedorCarrito.appendChild(div);

  //Mostar los productos en el carrito
  if (Carrito) {
    Carrito.forEach((productoCarrito) => {
      const { nombre, valorProducto, imagenProducto, cantidad} = productoCarrito;
      const div = document.createElement('div');
      div.classList = 'card-producto';
      div.innerHTML = `
              <img src="${imagenProducto}" alt="${nombre}" />
              <div class="centrado" >
                <h5>${nombre}</h5>
                <p>${cantidad}</p>
            </div>
            <p>100</p>
        `;
      contenedorCarrito.appendChild(div);
    });
  }
};

// Editar carrito recibe  el id(codigoPorducto), el arreglo y la cantidad que se irá actualizando

const EditarCarrito = (id, Carrito, cantidad) => {
  const encontrado = Carrito.find(
    (productoCarrito) => productoCarrito.codigoProducto == id);
  if (encontrado) {
    encontrado.cantidad += cantidad;
  }
  return Carrito;
};
