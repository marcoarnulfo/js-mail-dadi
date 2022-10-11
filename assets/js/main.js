console.log("hello");

    //Mail
 //Chiedi all’utente la sua email, (prompt)
 //controlla che sia nella lista di chi può accedere, array con più email [array]
 //stampa un messaggio appropriato sull’esito del controllo. 

  // commento esercizio uno MOMENTANEO
/*

const mailUser = prompt("Benvenuto, inserisci email")
//console.log(mailUser);
const usersMail = ['pinco.pallo@gmail.com', 'pallo.pinco@gmail.com', 'mario.rossi@gmail.com']
//console.log(usersMail);
const advice = document.querySelector("h1")

if(mailUser === usersMail[0]){
    console.log("Accesso eseguito");
    advice.innerHTML = "Benvenuto Pinco Pallo =)"
} else if(mailUser === usersMail[1]){
    console.log("Accessi eseguito");
    advice.innerHTML = "Benvenuto Pallo Pinco =)"
} else if(mailUser === usersMail[2]){
    console.log("Accessi eseguito");
    advice.innerHTML = "Benvenuto Mario Rossi =)"
} else {
    console.log("Accessi Negato");
    advice.innerHTML = "Accesso Negato =("
}
 */

//  Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const winner = document.querySelector("h2")

const userNumber = Math.round(Math.random() * 6 + 1)
console.log(userNumber, "Numero utente");
const computerNumber = Math.round(Math.random() * 6 + 1)
console.log(computerNumber, "Numero Computer");

if(userNumber > computerNumber){
    console.log("Utente, hai vinto!");
    winner.innerHTML = "Utente, hai vinto! =)"
} else{
    console.log("Ha vinto il computer!")
    winner.innerHTML = "Ha vinto il computer! =("
}



