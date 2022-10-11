'use strict';

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo un array dove sono presenti le e-mail registrate
const emailApprovate = ['pippo@gmail.it','pluto@gmail.it', 'topolino@gmail.it',
'minnie@gmail.it'];
// console.log(emailApprovate);

// creo una variabile per il button check, a cui attaccheremo il comando
const checkBtn = document.querySelector('button');
// console.log(typeof checkBtn);


//  prendo la mail inserita dall'utente
let userMail = document.getElementById('userMail');
// console.log(userMail);

// creo un ciclo che controlli se la mail dell'utente inserita è presente in quelle registrate

