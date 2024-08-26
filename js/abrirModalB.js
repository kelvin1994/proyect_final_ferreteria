function abrirModalBootstrap(imagenSrc, nombreProducto, detalleProducto,precioProducto) {

    const modal = new bootstrap.Modal(document.getElementById('miModal'));

    const modalImg = document.getElementById('modalImagen');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDetalle = document.getElementById('modalDetalle');
    const modalPreio = document.getElementById('modalPrecio');

   
    modalImg.src = imagenSrc;
    modalImg.alt = nombreProducto; 
    modalTitulo.textContent = nombreProducto;
    modalDetalle.textContent = detalleProducto;
    modalPreio.textContent = "S/"+ precioProducto;

    // Mostrar el modal
    modal.show();
}