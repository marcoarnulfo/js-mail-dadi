console.log("hello");

//Mail
//Chiedi all’utente la sua email, (prompt)
//controlla che sia nella lista di chi può accedere, array con più email [array]
//stampa un messaggio appropriato sull’esito del controllo. 

// commento esercizio uno MOMENTANEO


let mailUser = prompt("Benvenuto, inserisci email")

const usersMail = ['pinco.pallo@gmail.com', 'pallo.pinco@gmail.com', 'mario.rossi@gmail.com']

let advice = document.querySelector("h1")

let isValid = false 

for (let index = 0; index < usersMail.length; index++) {
    const element = usersMail[index];
    if (mailUser === element) {
        isValid = true;
    } 
}

if (isValid === true){
    isValid = advice.innerHTML = "Benvenuto =)"
} else {
    isValid = advice.innerHTML = "Accesso negato =("
}


//  Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

let winner = document.querySelector("h2")

const userNumber = Math.round(Math.random() * 5 + 1)
console.log(userNumber, "Numero utente");
const computerNumber = Math.round(Math.random() * 5 + 1)
console.log(computerNumber, "Numero Computer");

if (userNumber > computerNumber) {
    console.log("Utente, hai vinto!");
    winner.innerHTML = "hai vinto! =)" + "  " + userNumber + " > " + computerNumber
} else if (userNumber === computerNumber) {
    console.log("Pareggio!")
    winner.innerHTML = "Pareggio!" + " " + userNumber + " = " + computerNumber
} else {
    console.log("vincitore");
    winner.innerHTML = "Ha vinto il computer! =(" + " " + userNumber + " < " + computerNumber
}


