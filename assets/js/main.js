alert("password generator");
//istruzioni

//Chiedi all’utente il suo nome,
const user_name = prompt("Qual'è il tuo nome?");

//poi chiedi il suo cognome,
const user_surnume = prompt("Qual'è il tuo cognome?");

//poi chiedi il suo colore preferito
const favourite_color = prompt("Qual'è il tuo colore preferito?");
//Infine scrivi sulla pagina nomecognomecolorepreferito22
const current_year = 2022

document.getElementById("password").innerHTML = user_name + user_surnume + favourite_color + current_year ;