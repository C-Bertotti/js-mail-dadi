// Chiedi all’utente la sua email,
var email = prompt("Inserisci la tua email");
var user;

// controlla che sia nella lista di chi può accedere
var usersMail = ["0@gmail.com", "1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com", "5@gmail.com", "6@gmail.com"];

for (var i = 0; i < usersMail.length; i++) {
    if (email == usersMail[i]) {
        console.log ("puoi accedere");
        user = email;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
if (user == email) {
    console.log ("puoi accedere");
}