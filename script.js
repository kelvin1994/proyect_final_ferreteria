var header = document.getElementById('#header');

window.addEventListener('scroll', ()=>{
    var scroll=window.scrollY
    if (scroll>10) {
        header.style.backgroundColor = '#121212'
    } else{
          header.style.backgroundColor = '#FF0009'
    }
})

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

/**SCRIP PARA LOS PRODUCTOS */
// Definición del array de productos

const productos = [
    {
        nombre: "Martillo de Carpintero",
        precio: 10.99,
        descripcion: "Martillo con cabeza de acero y mango de madera.",
        categoria: "Herramientas",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/118007900_01/w=1500,h=1500,fit=padE"
  
    },
    {
        nombre: "Destornillador Philips",
        precio: 5.49,
        descripcion: "Destornillador de punta cruz con mango ergonómico.",
        categoria: "Herramientas",
        imagen: "https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/06/Destornillador-basico.webp?fit=900%2C900&ssl=1"
    },
    {
        nombre: "Llave Inglesa",
        precio: 12.99,
        descripcion: "Llave ajustable para tuercas y tornillos.",
        categoria: "Herramientas",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_820231-MLU70348927680_072023-O.webp"
    },
    {
        nombre: "Taladro Inalámbrico",
        precio: 59.99,
        descripcion: "Taladro inalámbrico con batería recargable.",
        categoria: "Herramientas Eléctricas",
        imagen: "https://promart.vteximg.com.br/arquivos/ids/7840650-1000-1000/imageUrl_1.jpg?v=638434422554670000"
    },
    {
        nombre: "Sierra Circular",
        precio: 45.99,
        descripcion: "Sierra circular de alta potencia para cortes precisos.",
        categoria: "Herramientas Eléctricas",
        imagen: "https://mundoconstructor.com.pe/wp-content/uploads/2024/01/A50004161_3.jpg"
    },
    {
        nombre: "Cinta Métrica",
        precio: 3.99,
        descripcion: "Cinta métrica de 5 metros con bloqueo automático.",
        categoria: "Medición",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpP9nLwPragiAMPAfg_pKPYh0Cn_kIUNeCw&s"
    },
    {
        nombre: "Nivel de Burbuja",
        precio: 8.99,
        descripcion: "Nivel de burbuja de 30 cm con alta precisión.",
        categoria: "Medición",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IZek2Oi5A3wXsMEouQkfyzLFGx7ae1CSUg&s"
    },
    {
        nombre: "Caja de Herramientas",
        precio: 25.99,
        descripcion: "Caja de herramientas de plástico con varios compartimentos.",
        categoria: "Almacenamiento",
        imagen: "https://eshop.wurth.pe/2819-large_default/caja-de-herramientas-66-piezas.jpg"
    },
    {
        nombre: "Cinta Aislante",
        precio: 2.49,
        descripcion: "Cinta aislante de alta resistencia para trabajos eléctricos.",
        categoria: "Electricidad",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzk4EDiGtVEYndNxVsbHPSth00C0kQ-TJfRuLZB3UsamVxcy-K0zL7_U00tGQQdJHBhiM&usqp=CAU"
    },
    {
        nombre: "Multímetro Digital",
        precio: 19.99,
        descripcion: "Multímetro digital para medir voltaje, corriente y resistencia.",
        categoria: "Electricidad",
        imagen: "https://dojiw2m9tvv09.cloudfront.net/68942/product/X_17592.jpg?57&time=1721345165"
    },
    {
        nombre: "Broca para Madera",
        precio: 7.99,
        descripcion: "Juego de brocas para madera de diferentes tamaños.",
        categoria: "Accesorios",
        imagen: "https://www.aibitech.com/15745-large_default/juego-de-6-brocas-para-madera-jbma-6-11337-truper.jpg"
    },
    {
        nombre: "Guantes de Trabajo",
        precio: 4.99,
        descripcion: "Guantes de trabajo resistentes y cómodos.",
        categoria: "Seguridad",
        imagen: "https://promart.vteximg.com.br/arquivos/ids/8046266-1000-1000/143170.jpg?v=638561555898900000"
    },
    {
        nombre: "Mascarilla de Protección",
        precio: 3.49,
        descripcion: "Mascarilla de protección contra polvo y partículas.",
        categoria: "Seguridad",
        imagen: "https://prosinfer.com/wp-content/uploads/2022/06/respirador-3m-6200.jpg"
    },
    {
        nombre: "Tornillos para Madera",
        precio: 6.99,
        descripcion: "Caja de tornillos para madera de diferentes tamaños.",
        categoria: "Fijaciones",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/4122429_01/w=800,h=800,fit=pad"
    },
    {
        nombre: "Clavos de Acero",
        precio: 4.49,
        descripcion: "Caja de clavos de acero para carpintería.",
        categoria: "Fijaciones",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITlx9JLjUmqPE9vI0JHiocOQCbAL4q1k0Rw&s"
    },
    {
        nombre: "Adhesivo de Montaje",
        precio: 7.49,
        descripcion: "Adhesivo de montaje fuerte y duradero.",
        categoria: "Adhesivos",
        imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/1901397_01/w=800,h=800,fit=pad"
    },
    {
        nombre: "Lija de Agua",
        precio: 1.99,
        descripcion: "Hoja de lija de agua para acabados finos.",
        categoria: "Abrasivos",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCIUs2SWTLgJ7IwqGDUaLCs0mbmYpcRGlrA&s"
    },
    {
        nombre: "Pulidora Angular",
        precio: 49.99,
        descripcion: "Pulidora angular de alta potencia para metal y madera.",
        categoria: "Herramientas Eléctricas",
        imagen: "https://dojiw2m9tvv09.cloudfront.net/79550/product/itoolstp11418060344.jpg"
    },
    {
        nombre: "Soldador Eléctrico",
        precio: 15.99,
        descripcion: "Soldador eléctrico para trabajos de electrónica.",
        categoria: "Soldadura",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_646488-MLU72647975396_112023-O.webp"
    },
    {
        nombre: "Juego de Llaves Allen",
        precio: 9.99,
        descripcion: "Juego de llaves Allen de diferentes tamaños.",
        categoria: "Herramientas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8LCkI2jNR7xDHee1IdJPW6vbduS4KQR1olg&s"
    }
  ];
  
  
  const productContainer = document.getElementById('product-container');
  
  // HTML PARA AÑADIR AL CONT 
  
  productos.forEach(producto => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
  
    productDiv.innerHTML = `
        <img class="img-producto" src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <h4>Categoria: ${producto.categoria}</h4>
        <p>${producto.descripcion}</p>
        <p>Precio: S/. ${producto.precio}</p>
    `;
  
    productContainer.appendChild(productDiv);
  });
  
  //PONERLE UN TAMAÑO FIJO A LA CAJA DE IMAGEN
  document.querySelectorAll('.img-producto').forEach(img =>{
    img.style.width = '200px'; 
    img.style.height = '200px';
    img.style.border = '1px solid #aaaaaa';
  });