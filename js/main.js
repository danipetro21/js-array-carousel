// PROBLEMA

// Dato un array contenente una lista di cinque immagini (che create voi in base alle img che vi passo),
// creare un carosello come nello screenshot allegato.


let img;
const div = document.querySelector(".slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let imgAnteprima1 = document.getElementById('img1');
let imgAnteprima2 = document.getElementById('img2');
let imgAnteprima3 = document.getElementById('img3');
let imgAnteprima4 = document.getElementById('img4');
let imgAnteprima5 = document.getElementById('img5');

let contatore = 1;

//reset dell'immagine di default quando si fa il refresh della pagina
img = `<img src="img/0${contatore}.webp" alt="img${contatore}">`;
div.innerHTML = img;
imgAnteprima1.style.cssText = 'border: 5px solid red;';

// funzione next

next.addEventListener("click", function () {

    // controllo con if se il contatore è arrivato all'ultima immagine cosi da poter ricomnciare con il "ciclo"
    if (contatore == 5) {
        contatore = 0;
    }
    contatore++;
    anteprima(contatore);
    console.log(contatore);
    // stampo le immagine sull'html secondo il nome che hanno 
    // tramite la variabile contatore do il numero dell'immagine
    img = `<img src="img/0${contatore}.webp" alt="img${contatore}">`;
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
    anteprima(contatore);
    console.log(contatore);
    img = `<img src="img/0${contatore}.webp" alt="img${contatore}">`;
    div.innerHTML = img;


});

// prova anteprima


function anteprima(contatore) {


    if (contatore == 1) {
        imgAnteprima1.style.cssText = 'border: 5px solid red;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';
        console.log("ciao" + contatore);
    }
    if (contatore == 2) {
        imgAnteprima2.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';
        console.log("ciao" + contatore);
    } else if (contatore == 3) {
        imgAnteprima3.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';
        console.log("ciao" + contatore);
    } else if (contatore == 4) {
        imgAnteprima4.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';
        console.log("ciao" + contatore);
    } else if (contatore == 5) {
        imgAnteprima5.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        console.log("ciao" + contatore);
    }
}

