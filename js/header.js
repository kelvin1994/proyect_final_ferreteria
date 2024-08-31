document.addEventListener("DOMContentLoaded", function() {
    fetch("/path/to/header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(error => console.error('Error al cargar el encabezado:', error));
  });

 