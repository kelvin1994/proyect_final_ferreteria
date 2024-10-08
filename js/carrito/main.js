let productos = [];
fetch('/productos.json')
    .then(response => response.json())
    .then(data => {
        productos = data;
        onload();
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar, .producto-agregar2");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="contenedor">
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nom_prod}">
        </div>
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nom_prod}</h3>
                <p class="producto-precio">S/ ${producto.precio}</p>
                <button class="bi bi-cart4 producto-agregar" id="${producto.id}"> Añadir al Carrito</button>
            </div>
        `;
        contenedorProductos.append(div);
        const img = div.querySelector(".producto-imagen");
        img.addEventListener("click", function() 
        {
            abrirModalBootstrap(producto.imagen, producto.nom_prod,producto.detalle,producto.precio);
        });
    });
    actualizarBotonesAgregar();
}
/** */
function cargarProductosCategoria (boton){
    botonesCategorias.forEach(boton => boton.classList.remove("active"));

        boton.classList.add("active");

        if (boton.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === boton.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === boton.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todossss los productos";
            cargarProductos(productos);
        }
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        cargarProductosCategoria(e.currentTarget);
    })
});

onload();


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (!productoAgregado) {
        console.error("Producto no encontrado:", idBoton);
        return; // Salir de la función si el producto no se encuentra
    }

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1; // Inicializar la cantidad del nuevo producto
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



async function onload () {
    const cat = location.hash.substr(1);
    if (cat !== '') {
        const boton = document.getElementById(cat);
        boton.click();
        cargarProductosCategoria(boton);
    }
    else{
        cargarProductos(productos);
    }
}
