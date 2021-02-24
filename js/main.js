// Chiedere il cognome all'utente

var cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);

// inserire in un Array con altri cognomi

var listaCognomi = [
 "Rossi",
 "Bianchi",
 "Duzioni",
 "Balsano",
 "Verdi",
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

for (var i = 0; i < listaCognomiOrdinati.length; i++) {
 console.log(listaCognomiOrdinati[i]);
 document.getElementById("cognomi").innerHTML += "<li>" + listaCognomiOrdinati[i] + "</li>";

 // Stampare la lista ordinata alfabeticamente
 listaCognomiOrdinati.sort();
}


// Scrivere la posizione "umana"
var position = listaCognomiOrdinati.indexOf(cognome);
console.log(position);
alert("Il tuo Cognome si trova in " + ++position + " posizione!");
