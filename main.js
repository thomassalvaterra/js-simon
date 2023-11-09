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



