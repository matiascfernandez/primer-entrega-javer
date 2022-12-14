const boton1 = document.querySelector("#boton1")
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")

const users = []

idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = new User(username, email, password)

    users.push(user)

    idForm.reset()
    console.log(users)
})


botonUsers.addEventListener('click', () => {
    divUsers.innerHTML = ""
    users.forEach((user, indice) => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        
        `
    })
})

const PRODUCTOS_JAVER = [
    {
        id: '1',
        nombre: 'TRAJE NEGRO LISO CASAMIENTO',
        precio: 40000,
        talle:`s, m`,
        descripcion: ' Traje formal en tejido 100% lana. Saco de dos botones con solapa fina y doble apertura trasera con forro completo en acetato y viscosa y con pespunte al tono. Pantalón recto sin pinzas. Moldería slim fit.',
        img: 'https://img.freepik.com/foto-gratis/concepto-negocio-retrato-cuerpo-entero-hombre-negocios-elegante-traje-elegante-caminando-sobre-fondo-blanco_1258-80289.jpg?t=st=1654188714~exp=1654189314~hmac=15550dfa18d069d979f6b59a751711d89c52ee645d7e2974a0893690e5d21236&w=360',
        categoria: ' CLASICO',
    },
    {
        id: '2',
        nombre: 'TRAJE GRIS LISO CASAMIENTO',
        precio: 35000,
        talle:`xl`,
        descripcion: ' Traje formal en tejido italiano mezcla de lana y seda para el gris y 100% lana para el resto de los colores. Saco de dos botones con solapa fina y doble apertura trasera con forro en medio cuerpo en viscosa y envivado en contratono. Pantalón recto sin pinzas. Moldería slim fit.',
        img: 'https://img.freepik.com/free-photo/full-length-portrait-businessman-isolated-gray-wall_231208-9209.jpg?t=st=1650477958~exp=1650478558~hmac=feccece7be6cf7b73e4f3943a0b1637fac1fe5818cf604ff8912b01591d0e69c&w=360',
        categoria: ' CLASICO',
    },
    {
        id: '3',
        nombre: 'TRAJE VERDE IRLANDES',
        precio: 20000,
        talle:`l`,
        descripcion: ' Traje cuadrille formal en tejido italiano de 100% lana. Saco de dos botones con solapa en punta y forrada en raso, detalle de botones y vivos de bolsillos forrados en raso. Forro completo en acetato y viscosa con pespunte al tono. Pantalón recto sin pinzas con cintura cruzada. Moldería slim fit.',
        img: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        categoria: ' CUADRILLE',
    },
    {
        id: '4',
        nombre: 'TRAJE AZUL PETROLEO',
        precio: 45000,
        talle:`m`,
        descripcion: ' Traje formal en tejido italiano 100% lana Vitale Barberis Canónico Super 110¨s. Saco de dos botones con solapa fina y un tajo trasero forrado en viscosa. Pantalón recto sin pinzas. Moldería slim fit moderada .',
        img: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
        categoria: ' CUADRILLE',
    },
    {
        id: '5',
        nombre: 'CORBATA NEGRA LISA',
        precio: 5000,
        talle: `s, m, l, xl`,
        descripcion: ' Corbata 100% seda natural',
        img: 'hhttps://www.google.com/imgres?imgurl=https%3A%2F%2Famp.protocolo.org%2Fextfiles%2Fi-6466-cG.1252.1.jpg&imgrefurl=https%3A%2F%2Fwww.protocolo.org%2Fsocial%2Fvestuario%2Fcomo-llevar-la-corbata.html&tbnid=4cfxrC3GdzdLmM&vet=12ahUKEwj924SZyrr5AhXam5UCHeXLBy0QMygSegUIARCJAg..i&docid=Do645LbREIMROM&w=640&h=577&q=corbata&ved=2ahUKEwj924SZyrr5AhXam5UCHeXLBy0QMygSegUIARCJAg',
        categoria: ' ACCESORIOS',
    },
    {
        id: '6',
        nombre: 'MOÑO NEGRO LISO',
        precio: 4000,
        talle: `unico`,
        descripcion: ' Moño liso de microfibra. Con tira ajustable. Composición: 100% poliéster.',
        img: 'https://equus.vtexassets.com/arquivos/ids/234862-800-auto?v=637886733071330000&width=800&height=auto&aspect=true',
        categoria: ' ACCESORIOS',
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
    /*
    obtenerInfoID() {
        return `ID: ${this.id} | ${this.nombre} - ${this.precio}`;
    }
    obtenerAviso(emoji) {
        return `${this.nombre} >>>>> sale $${this.precio}${emoji}`;
    }*/
} 

/*
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
*/

const productos = PRODUCTOS_JAVER.map(producto => new Producto(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.talle,
    producto.descripcion,
    producto.img,
    producto.categoria
));






productos.forEach((producto) => {
    divProductos.innerHTML +=`
        <div class="card">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">ID:${producto.id}</p>
                <p class="card-text">Precio:${producto.precio}</p>
                <p class="card-text">Descripcion:${producto.descripcion}</p>
                <p class="card-text">Categoria:${producto.categoria}</p>
                <button type="submit" id="agregarCarrito"> "Posible boton sin dinamica para el carrito" </button>
                </div>
            </div>`
})


    /*

agregarAlCarritoPorId(productos)
agregarAlCarritoPorId(productos)
agregarAlCarritoPorId(productos)
agregarAlCarritoPorId(productos)

alert(`abre la consola para ver tu compra`)
mostrarCarrito(carrito)
console.log('TOTAL: ', obtenerTotal(carrito))

*/

