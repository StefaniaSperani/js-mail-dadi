'use strict';

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creo un array dove sono presenti le e-mail registrate
const emailElenco = ['pippo@gmail.it','pluto@gmail.it', 'topolino@gmail.it',
'minnie@gmail.it'];
// console.log(emailElenco);

// creo una variabile per il button check, a cui attaccheremo il comando
const checkBtn = document.querySelector('button');
// console.log(typeof checkBtn);

//  creo una variabile che prende la mail inserita dall'utente
let mailInput = document.getElementById('userMail');
// console.log(userMail);

// controllo se la mail dell'utente inserita è presente in quelle registrate
const find = function(){
    // prendo il valore della mail
    let mailValue = mailInput.value;
    // console.log(mailValue);

    // creo un check per la mail
    let checkEmail = false;

    // ora cerco la mail nelle mail già presenti in elenco
    for(let i = 0; i < emailElenco.length, i++;){
        
        // creo una variabile per emailElenco.length
        const elencoValue = emailElenco[i];

        // controllo con il check se la mail si trova in elenco
        if(mailValue === elencoValue){
            checkEmail = true;
        }
    }

    // se il check risulta positivo gli diciamo
    if(checkEmail){
        document.getElementsByClassName('message').innerHTML = 'Ottimo, sei connesso!';
    } else {
        document.getElementsByClassName('message').innerHTML = 'Ops, non sei registrato!'
    }
}
console.log(find);

checkBtn.addEventListener('click', find)

