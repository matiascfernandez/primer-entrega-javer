const PRODUCTOS_JAVER = [
    {
        id: '1',
        nombre: 'TRAJE NEGRO LISO CASAMIENTO',
        precio: 40000,
        talle:`s, m`,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://img.freepik.com/foto-gratis/concepto-negocio-retrato-cuerpo-entero-hombre-negocios-elegante-traje-elegante-caminando-sobre-fondo-blanco_1258-80289.jpg?t=st=1654188714~exp=1654189314~hmac=15550dfa18d069d979f6b59a751711d89c52ee645d7e2974a0893690e5d21236&w=360',
        categoria: 'CLASICO',
    },
    {
        id: '2',
        nombre: 'TRAJE GRIS LISO CASAMIENTO',
        precio: 35000,
        talle:`xl`,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://img.freepik.com/free-photo/full-length-portrait-businessman-isolated-gray-wall_231208-9209.jpg?t=st=1650477958~exp=1650478558~hmac=feccece7be6cf7b73e4f3943a0b1637fac1fe5818cf604ff8912b01591d0e69c&w=360',
        categoria: 'CLASICO',
    },
    {
        id: '3',
        nombre: 'TRAJE VERDE IRLANDES',
        precio: 20000,
        talle:`l`,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        categoria: 'CUADRILLE',
    },
    {
        id: '4',
        nombre: 'TRAJE AZUL PETROLEO',
        precio: 45000,
        talle:`m`,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
        categoria: 'CUADRILLE',
    },
    {
        id: '5',
        nombre: 'CORBATA NEGRA LISA',
        precio: 5000,
        talle: `s, m, l, xl`,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'hhttps://www.google.com/imgres?imgurl=https%3A%2F%2Famp.protocolo.org%2Fextfiles%2Fi-6466-cG.1252.1.jpg&imgrefurl=https%3A%2F%2Fwww.protocolo.org%2Fsocial%2Fvestuario%2Fcomo-llevar-la-corbata.html&tbnid=4cfxrC3GdzdLmM&vet=12ahUKEwj924SZyrr5AhXam5UCHeXLBy0QMygSegUIARCJAg..i&docid=Do645LbREIMROM&w=640&h=577&q=corbata&ved=2ahUKEwj924SZyrr5AhXam5UCHeXLBy0QMygSegUIARCJAg',
        categoria: 'ACCESORIOS',
    },
    {
        id: '6',
        nombre: 'MOÑO NEGRO LISO',
        precio: 4000,
        talle: `unico`,
        descripcion: 'Loreffd ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://equus.vtexassets.com/arquivos/ids/234862-800-auto?v=637886733071330000&width=800&height=auto&aspect=true',
        categoria: 'ACCESORIOS',
        },
];

class Producto {
    constructor(id, nombre, precio, talle, descripcion , img, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.talle = talle;
        this.descripcion = descripcion;
        this.img = img;
        this.categoria = categoria;
    }
    obtenerInfoID() {
        return `ID: ${this.id} | ${this.nombre} - ${this.precio}`;
    }
    obtenerAviso(emoji) {
        return `${this.nombre} >>>>> sale $${this.precio}${emoji}`;
    }
} 


const carrito = [];

const obtenerInfoProductos = (productosLista) => {
    return productosLista.map((productos) => productos.obtenerInfoID(``)).join('\n');
}

const agregarAlCarritoPorId = (productos) => {
    const infoProductos = obtenerInfoProductos(productos);
    const id = prompt('Ingrese el ID del producto que desea agregar al carrito:\n' + infoProductos);
    const producto = productos.find((producto) => producto.id === id);
    if (!producto) return;
    carrito.push(producto);
    alert('Producto agregado al carrito');
}

const mostrarCarrito = (carritoDeProductos) => {
    carritoDeProductos.forEach((producto) => {
        console.log(producto.obtenerAviso('💰'));
    });
}

const obtenerTotal = (productosLista) => {
    let total = 0;
    productosLista.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}

const productos = PRODUCTOS_JAVER.map(producto => new Producto(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.talle,
    producto.descripcion,
    producto.img,
    producto.categoria
));


agregarAlCarritoPorId(productos)
agregarAlCarritoPorId(productos)
agregarAlCarritoPorId(productos)
agregarAlCarritoPorId(productos)

alert(`abre la consola para ver tu compra`)
mostrarCarrito(carrito)
console.log('TOTAL: ', obtenerTotal(carrito))




