// PROBLEMA

// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.


let img;
const div = document.querySelector(".slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let contatore = 1;

// img exaple
img = `<img src="img/0${contatore}.webp" alt="prova">`;
div.innerHTML = img;

next.addEventListener("click", function () {
    if (contatore == 5) {
        contatore = 0;
    }
    contatore++;
    console.log(contatore);
    img = `<img src="img/0${contatore}.webp" alt="prova">`;
    div.innerHTML = img;
});


prev.addEventListener("click", function () {
    if (contatore == 1) {
        contatore = 6;
    }
    contatore--;
    console.log(contatore);
    img = `<img src="img/0${contatore}.webp" alt="prova">`;
    div.innerHTML = img;


});


