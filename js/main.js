// PROBLEMA

// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.


let img;
const div = document.querySelector(".slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let contatore = 1;

//reset dell'immagine di default quando si fa il refresh della pagina
img = `<img src="img/0${contatore}.webp" alt="prova">`;
div.innerHTML = img;

// funzione next

next.addEventListener("click", function () {
    // controllo con if se il contatore è arrivato all'ultima immagine cosi da poter ricomnciare con il "ciclo"
    if (contatore == 5) {
        contatore = 0;
    }
    contatore++;
    console.log(contatore);
    // stampo le immagine sull'html secondo il nome che hanno 
    // tramite la variabile contatore do il numero dell'immagine
    img = `<img src="img/0${contatore}.webp" alt="prova">`;
    // aggiungo l'immagine all'html
    div.innerHTML = img;
});

// funzione prev per tornare indietro con le immagini
prev.addEventListener("click", function () {
    // se il contatore è arrivato ad uno riparto con l'ultima immagine
    if (contatore == 1) {
        contatore = 6;
    }
    contatore--;
    console.log(contatore);
    img = `<img src="img/0${contatore}.webp" alt="prova">`;
    div.innerHTML = img;


});


