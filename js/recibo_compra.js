// Crear Tabla de Datos

const body = document.querySelector("body")
const table = document.createElement("table")
const detalle = document.createElement("div")
table.style.borderCollapse = "collapse";

let BORDES_DE_TABLA = "1px solid black";
let PADDING_DE_TABLA = "0.5em";
let POSICION_PARA_HEADINGS = 1;
let POSICION_INICIAL_ARREGLO = 1;
let POSICION_FINAL_ARREGLO = 3;



let productos = [
    {
        nombre: "Manuel",
        apellido: "Alfaro",
        comuna: "asdf",
        correo: "asdfasdfas",
        direccion: "asdfas",
        region: "sadfasd",
    },
    {
        producto: "calcetin",
        cantidad: 5,
        codigo: 001,
    },
    {
        producto: "chalas zico",
        cantidad: 3,
        codigo: 002,
    },
    {
        producto: "toalla",
        cantidad: 6,
        codigo: 003,
    },
]


function crearHeadings(arreglo, posicion, tabla) {
    const headings = document.createElement("tr");
    const arregloRecorrido = Object.values(arreglo)[posicion];
    Object.keys(arregloRecorrido).forEach(element => {
        const th = document.createElement("th");
        th.textContent = element.toUpperCase();
        th.style.border = BORDES_DE_TABLA;
        th.style.padding = PADDING_DE_TABLA;
        headings.appendChild(th)
    });
    tabla.appendChild(headings)
};


function crearContenido(arreglo, posicionInicial, tabla) {
    const contenidos = document.createElement("tr");
    const arregloRecorrido = Object.values(arreglo)[posicionInicial];
    Object.values(arregloRecorrido).forEach(element => {
        const td = document.createElement("td");
        td.textContent = element;
        td.style.border = BORDES_DE_TABLA;
        td.style.padding = PADDING_DE_TABLA;
        contenidos.appendChild(td)
    });
    tabla.appendChild(contenidos)
}

function iterarCreacion(desdePosicion, hastaPosicion, arreglo, tabla) {
    for (let i= desdePosicion; i <= hastaPosicion; i++) {
        crearContenido (arreglo, i , tabla)
    }
}

function crearDatoContacto(key, value, objetivo) {
    const dato = document.createElement("p");
    dato.textContent = `${key}: ${value}`;
    objetivo.appendChild(dato)
}

function crearDatoPago(key, value, objetivo) {
    const dato = document.createElement("p");
    const cifra = document.createElement("strong");
    dato.textContent = `${key}: `;
    cifra.textContent = value;
    dato.appendChild(cifra);
    objetivo.appendChild(dato)
}

// Inicializador de Funciones

crearHeadings(productos, POSICION_PARA_HEADINGS , table);
iterarCreacion(POSICION_INICIAL_ARREGLO, POSICION_FINAL_ARREGLO, productos, table)

// Enviar Correo


const serviceID = "service_kirku2h";
const templateID = "template_2nlp6y6";
const publicKey = "e18cPUWULRRLR1iJI";

console.log(table.innerHTML)
let detalleFormateado = table.innerHTML;        

let templateParams = {
    to_name: inputFullname,
    from_name: "Cachureando Store",
    to_email: "m.alfaro@live.cl",
    my_html: detalleFormateado,
}

function enviarEmail(){

    detalle.replaceChildren();
    crearDatoPago("", "", detalle);
    crearDatoPago("Subtotal", 234234, detalle);
    crearDatoPago("Impuesto", 234234, detalle);
    crearDatoPago("Total", 234234, detalle);
    crearDatoContacto("", "", detalle);
    crearDatoContacto("Nombre",inputFullname.value, detalle);
    crearDatoContacto("Email",inputEmail.value, detalle);
    crearDatoContacto("Dirección",inputEmail.value, detalle);
    crearDatoContacto("Comuna",inputEmail.value, detalle);
    crearDatoContacto("Region",inputEmail.value, detalle);
    crearDatoContacto("Texto",inputEmail.value, detalle);
    table.appendChild(detalle);

   /*  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(function() {
        alert('El comprobante se ha enviado correctamente a tu email');
    }, function(error) {
        alert('Ha fallado el envío del comprobante...', error);
    });     */
}

const botonEnviarCorreo = document.querySelector("#form-submitcart");
botonEnviarCorreo.addEventListener("click", ()=>{
    body.appendChild(table);
    enviarEmail();
})






