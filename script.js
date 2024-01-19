const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`;
}

setInterval(carrossel, 1800);


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

