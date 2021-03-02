//Genero un numero random per lo user da 1 a 6;
var userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero generato per te è: " + userNumber);

//Genero un numero random per il computer da 1 a 6;
var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero generato per il computer è: " + computerNumber);

//Verifico chi fa il punteggio più alto
var winner;
var pari;
if ( userNumber > computerNumber ) {
    winner = userNumber;
} else if ( userNumber < computerNumber ) {
    winner = computerNumber;
} else {
    winner = pari;
}

//Verifico chi ha vinto
if ( winner == userNumber ) {
    console.log("complimenti, hai vinto!");
} else if ( winner == computerNumber ) {
    console.log("Mi dispiace, hai perso!");
} else ( winner == pari ) { 
    console.log("Avete giocato lo stesso numero");
}