// Chiedere il cognome all'utente

var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

// inserire in un Array con altri cognomi

var listaCognomi = [
 "rossi",
 "bianchi",
 "duzioni",
 "balsano",
 "verdi",
];
console.log(listaCognomi);

// Array cognomi ordinati alfabeticamente

var listaCognomiOrdinati = [
 "rossi",
 "bianchi",
 "duzioni",
 "balsano",
 "verdi",
];
// Inserire il cognome dell'utente dentro l'array

listaCognomiOrdinati.push(cognome);

 // Stampare la lista ordinata alfabeticamente
 listaCognomiOrdinati.sort();



for (var i = 0; i < listaCognomiOrdinati.length; i++) {
 console.log(listaCognomiOrdinati[i]);
 document.getElementById("cognomi").innerHTML += "<li>" + listaCognomiOrdinati[i] + "</li>";
}


// Scrivere la posizione "umana"
var position = listaCognomiOrdinati.indexOf(cognome);
console.log(position);
alert("Il tuo Cognome si trova in " + ++position + " posizione!");
