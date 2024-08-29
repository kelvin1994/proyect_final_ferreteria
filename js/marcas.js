document.addEventListener("DOMContentLoaded", function() {
    // Cargar el contenido de marcas.html en el div "div_marcas"
    fetch("/path/to/marcas.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("div_marcas").innerHTML = data;

        // Inicializar la funcionalidad del botón después de que el contenido se haya cargado
        var app = new App();
        window.app = app;

        // Agregar los event listeners a los botones una vez que el contenido esté disponible
        document.querySelectorAll('.button-prev, .button-next').forEach(button => {
            button.addEventListener('click', app.processingButton.bind(app));
        });
      })
      .catch(error => console.error('Error al cargar el marcas', error));
});

function App() {}

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track);
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
