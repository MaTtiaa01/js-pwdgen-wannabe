alert("password generator");
//istruzioni

//Chiedi all’utente il suo nome,
const userName = prompt("Qual'è il tuo nome?");

//poi chiedi il suo cognome,
const userSurnume = prompt("Qual'è il tuo cognome?");

//poi chiedi il suo colore preferito
const favouriteColor = prompt("Qual'è il tuo colore preferito?");
//Infine scrivi sulla pagina nomecognomecolorepreferito22
const currentYear = 2022

document.getElementById("password").innerHTML = userName + userSurnume + favouriteColor + currentYear ;