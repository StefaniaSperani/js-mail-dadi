

// GIOCA A DADI CON IL COMPUTER
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// creo le variabili che andrò ad utilizzare
const nmrPlayer = document.getElementById('nmr-player');
const nmrPc = document.getElementById('nmr-pc');
const result = document.getElementById('result');

// creo una costante che poi verrà attaccata al bottone Gioca
const play = function(){
    // creo un numero random per il giocatore e per il pc
    let nPlayer = Math.floor(Math.random() * 6) + 1;
    let nPc = Math.floor(Math.random() * 6) + 1;

    // inserisco i numeri nell'html
    nmrPlayer.innerText = nPlayer;
    nmrPc.innerText = nPc;
    
    // controllo se il numero è maggiore o minore
    if(nPlayer > nPc){
        result.innerHTML = 'Bravo, hai vinto tu!';
    }else if(nPc > nPlayer){
        result.innerHTML = 'Ha vinto il Computer!';
    }else{
        result.innerHTML = 'Non ha vinto nessuno!';
    }
}
let btnResult = document.getElementById('btn-play');
btnResult.addEventListener('click', play);