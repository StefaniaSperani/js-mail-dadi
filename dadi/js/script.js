

// GIOCA A DADI CON IL COMPUTER
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creo una costante che poi verrà attaccata al bottone Gioca
const play = function(){
    // creo un numero random per il giocatore
    let nPlayer = Math.floor(Math.random() * 6) + 1;
    console.log(nPlayer, 'ciao')
}