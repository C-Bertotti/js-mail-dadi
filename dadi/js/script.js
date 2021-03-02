//Genero un numero random per lo user da 1 a 6;
var userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero generato per te è: " + userNumber);

//Genero un numero random per il computer da 1 a 6;
var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero generato per il computer è: " + computerNumber);

//Verifico chi fa il punteggio più alto
if ( userNumber > computerNumber ) {
    console.log("complimenti, hai vinto!");
} else if ( userNumber < computerNumber ) {
    console.log("Mi dispiace, hai perso!");
} else {
    console.log("Avete giocato lo stesso numero");
}
