// chiedo il nome 
const name = prompt("Qual è il tuo nome?");
console.log(name);

// chiedo il cognome
const surename = prompt("Qual è il tuo conome?");
console.log(surename);

// chiedo il colore preferito
const color = prompt("Qual è il tuo colore preferito?");
console.log(color);

// numero 21
const numero = 21;
console.log(numero);

document.getElementById("mio-id").innerHTML = name + surename + color + numero;