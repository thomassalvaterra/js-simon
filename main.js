// 1. Visualizziamo in pagina 5 numeri casuali e (in contemporanea) parte un Timer di 30sec
// 2. A fine Timer i numeri scompaiono e l'utente inserisce i numeri che ha visto
// 3. Inseriti i 5 numeri visti nei prompt, quanti e quali numeri sono stati indovinati 

const number = document.createElement ("div");


for (let i = 0; i < 5; i++) {
    let casualNum = getRndInteger (1, 100);
    console.log(casualNum);
    number.classList.add("msg");
    document.getElementsByClassName("msg").innerHTML = ("I 5 numeri casuali sono: ", casualNum);   
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var seconds = 30;

var clock = setInterval(function() {
    if(seconds == 0) {
        number.classList.remove("msg");
        let numSeen;
        numSeen = prompt("Inserisci un numero che hai visto");
        numSeen = prompt("Inserisci un numero che hai visto");
        numSeen = prompt("Inserisci un numero che hai visto");
        numSeen = prompt("Inserisci un numero che hai visto");
        numSeen = prompt("Inserisci un numero che hai visto");
        console.log(numSeen);
        clearInterval(clock);
    } else if (seconds > 0) {
        console.log(seconds);
        seconds--;
    }
    
}, 1000);



//chiamo getRandomNumbers e genero 5 numeri casuali in array

// const numeri = getRandomNumbers(5, 1, 100);

//stampo l'array in pagina

// document.getElementById("msg").innerHTML = numeri.join (", ");

// setTimeout(hideNumbersromDOM(), 2000);
// setTimeout(hideNumbersromDOM(), 2100);

//funzione da eseguire dopo 30sec
// function hideNumbersromDOM() {
// document.getElementById("msg").innerHTML = "";
// }

// setTimeout(function() {
// document.getElementById("msg").innerHTML = "";  
// }, 2000);

//dopo 30sec chiedo i numeri all'utente

// setTimeout(function() {
//     let numeriUtente = getUserNumbers();
//     let numeriIndovinati = getOkNumbers(numeri casuali, numeriUtente);
//     alert ("Hai indovinato " + numeriIndovinati.lenght + "numeri");
//     alert ("I numeri che hai indovinato sono: " + numeriIndovinati.join(", "));
// }, 2100);

//l'utente deve insaerire i 5 numeri visti prima nei prompt

// function getUserNumbers() {
//chiedo il prompt all'utente per cinque volte
//ad ogni prompt pusho il dato nell'array
// let numeri = [];
// while (numeri.lenght<5) {
// let nuovoNumero = prompt("Inserisci un numero visto");
// if(!numeri.includes(nuovoNumero)) {
// numeri.push(nuovoNumero); 
// } else {
// alert ("Non puoi inserire un doppione");
// }
// }
// console.log(numeri);
// return numeri;
// }

//controllo e restituiamo quali e quanti numeri sono stati indovinati

// function getOkNumbers(arrayOriginale, arrayDaConfrontare){
    //array di appoggio con risultati
    // let risultato = [];

    //per ogni elemento dell'array originale, controllo che ci sia corrispondenza nell'altro array
//     for (let i = 0; i < arrayOriginale.length; i++) {
//         if(arrayDaConfrontare.includes(arrayOriginale[i])) {
//             risultato.push(arrayOriginale[i]);
//         }  
//     }
//     return risultato);
// }

//funzione che restituisce un array contenente N numeri casuali tutti diversi
//accetta tre parametri: quanti numeri generare e il range min-max

// function getRandomNumbers(quanti, min, max) {
//     let numeri = [];

//     while(numeri.lenght < quanti) {
//         const nuovoNumero = getRndInteger(min, max);
//         controllo che non sia un array
//         if(!numeri.includes(nuovoNumero)) {
//             nel caso lo pusho
//             numeri.push(nuovoNumero);
//         }
//     }
//     return numeri;
// }

//funzione che restituisce un intero casuale compreso nel range min/max (inclusi)

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }