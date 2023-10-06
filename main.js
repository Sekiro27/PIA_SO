document.addEventListener("DOMContentLoaded", function () {
    var text = "Ubuntu es un sistema operativo de código abierto basado en el kernel de Linux. El propósito de esta página web es brindar diversa información para el aprendizaje y uso de este sistema operativo para todo aquel usuario que nos visite.";
    var typedText = document.getElementById("typed-text");
    var index = 0;

    function typeText() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 30);
        }
    }

    typeText();
});

$(document).ready(function () {
    $('#image-carousel').carousel();
});
