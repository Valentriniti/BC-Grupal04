  // formatear dinero
const formatearDinero = (dinero) => {
    return new Intl.NumberFormat('ES', {
    style: 'currency',
    currency: 'clp'
    }).format(dinero);
};


const Productos = [
    {
        imagen: './img/p01.jpg',
        nombre: 'Futón Clásico',
        codigo: '01',
        descripcion: 'Futón de tela gris grafito con base metálica reforzada. Dimensiones 170 x 70 x 81 cm.',
        precio: "$" + formatearDinero(300000),
        precioCalculado: 300000,
        cantidad: 0,
    },
    {
        imagen: './img/p02.jpg',
        nombre: 'Lámpara mesa',
        codigo: '02',
        descripcion: 'Lámpara metal negro mate. Dimensiones 45 x 20 x 20 cm.',
        precio: "$" + formatearDinero(25000),
        precioCalculado: 25000,
        cantidad: 0,
    },
    {
        imagen: './img/p03.jpg',
        nombre: 'Silla Velvet',
        codigo: '03',
        descripcion: 'Silla tela aterciopelada gris grafito con base de madera. Dimensiones 100 x 60 x 70cm ',
        precio: "$" + formatearDinero(100000),
        precioCalculado: 100000,
        cantidad: 0,
    },
    {
        imagen: './img/p04.jpg',
        nombre: 'Estante Victoria',
        codigo: '04',
        descripcion: 'Estante madera teñida negro mate. Dimensiones 200 x 80 x 40 cm.',
        precio: "$" + formatearDinero(420000),
        precioCalculado: 420000,
        cantidad: 0,
    },
    {
        imagen: './img/p05.jpg',
        nombre: 'Lampara Albert',
        codigo: '05',
        descripcion: 'Lámpara de pie con base metálida y pantalla semi rigida. Dimensiones 150 x 40 x 60cm.',
        precio: "$" + formatearDinero(80000),
        precioCalculado: 80000,
        cantidad: 0,
    },
    {
        imagen: './img/p06.jpg',
        nombre: 'Silla Coral',
        codigo: '06',
        descripcion: 'Silla tela aterciopelada verde. Soporte madera color negro mate. Dimensiones 90 x 60 x 70cm.',
        precio: "$" + formatearDinero(120000),
        precioCalculado: 120000,
        cantidad: 0,
    },
    {
        imagen: './img/p07.jpg',
        nombre: 'Sofá Sofía',
        codigo: '07',
        descripcion: 'Sofá de 3 cuerpos blanco invierno, Soporte madera color natiral. Dimensiones 170 x 70 x 81 cm.',
        precio: "$" + formatearDinero(500000),
        precioCalculado: 500000,
        cantidad: 0,
    },
    {
        imagen: './img/p08.jpg',
        nombre: 'Closet Dark Nordic',
        codigo: '08',
        descripcion: 'Closet de dos puerta y dos cajones cierre suave. Melamina 18mm negro mate y alamo. Dimensiones 200 x 98 x 58 cm.',
        precio: "$" + formatearDinero(380000),
        precioCalculado: 380000,
        cantidad: 0,
    },
    {
        imagen: './img/p09.jpg',
        nombre: 'Mesa Dark Thin',
        codigo: '09',
        descripcion: 'Mesa comedor negro mate, superficie melamina 18mm y base metálica. Dimensiones 110 x 67 x 75 cm.',
        precio: "$" + formatearDinero(200000),
        precioCalculado: 200000,
        cantidad: 0,
    },
    {
        imagen: './img/p10.jpg',
        nombre: 'Escritorio Dark Nordic',
        codigo: '10',
        descripcion: 'Escritorio con dos cajones cierre suave. Superficie de madera tinte negro y base metálica. Dimensiones 110 x 60 x 75 cm.',
        precio: "$" + formatearDinero(160000),
        precioCalculado: 160000,
        cantidad: 0,
    },
    {
        imagen: './img/p11.jpg',
        nombre: 'Escritorio Brown Mini',
        codigo: '11',
        descripcion: 'Escritorio melamina 18mm color chocolate y base metal. Cajón cierre suave. Dimensiones 65 x 40 x 75 cm.',
        precio: "$" + formatearDinero(110000),
        precioCalculado: 110000,
        cantidad: 0,
    },
    {
        imagen: './img/p12.jpg',
        nombre: 'Silla Dark Thin',
        codigo: '12',
        descripcion: 'Silla estructura metálica negro mate. Asiento y respaldo madera tinte negro. Dimensiones 55 x 53 x 78 cm.',
        precio: "$" + formatearDinero(100000),
        precioCalculado: 100000,
        cantidad: 0,
    },
]

export default Productos;