const box = document.querySelector(".containerr");
const imagens = document.querySelector(".containerr img");

let contador = 1;

function slider() {
    contador++;

    if (contador > 3) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 600}px)`;
}

setInterval(slider, 2000)