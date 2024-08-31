
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.nom_prod}">
                <div class="carrito-producto-titulo">
                    <small class="titulo">PRODUCTO</small>
                    <h3 class="abajo">${producto.nom_prod}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small class="titulo">CANTIDAD</small>
                    <p class="abajo">${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small class="titulo">PRECIO</small>
                    <p class="abajo">S/ ${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small class="titulo">SUB - TOTAL</small>
                    <p class="abajo">S/ ${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);

            
        })

        document.querySelectorAll('.titulo').forEach(titulo =>{
            titulo.style.fontFamily = 'Roboto, sans-serif'; 
            titulo.style.fontWeight = '400'; 
            titulo.style.fontSize = '14px';
            titulo.style.color = '#ffffff'; 
            titulo.style.backgroundColor = '#00a2bf'; 
            titulo.style.padding = '2px 100px';
            titulo.style.borderRadius='5px';
          });

          document.querySelectorAll('.abajo').forEach(abajo =>{
            abajo.style.fontFamily = 'Roboto, sans-serif'; 
            abajo.style.fontWeight = '400'; 
            abajo.style.fontSize = '18px';
            abajo.style.color = '#1b1b1b'; 
            abajo.style.textAlign = 'center';
            abajo.style.backgroundColor = '#d8d8d8'; 
            abajo.style.padding = '5px'
          });

          document.querySelectorAll('.carrito-producto-eliminar').forEach(boton =>{
            boton.style.color = '#ffffff'; 
            boton.style.textAlign = 'center';
            boton.style.backgroundColor = '#e40045'; 
            boton.style.borderRadius = '5px';
            boton.style.padding = '8px'
          });
    
    actualizarBotonesEliminar();
    actualizarTotal();
	
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}


function eliminarDelCarrito(e) 
{
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    Swal.fire({
        title: '¿Estás seguro de eliminar el producto?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.splice(index, 1);
            cargarProductosCarrito();
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        }
    });
}


botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
      })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `S/ ${totalCalculado.toFixed(2)}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}