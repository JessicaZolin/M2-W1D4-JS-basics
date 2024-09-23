/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("I principali datatype in Javascript sono:" + 
"- NUMBER: un qualsiasi numero decimale" +
"- STRING: è una sequenza di caratteri di varia lunghezza delimitata da apici doppi o apici singolo. Se tra gli apici non è presnete nessun valore vuol dire che la stringa è vuota." +
"- BIGINT: serve a memorizzare valori interi troppo grandi per essere rappresentati da un normal enumero JavaScript" +
"- BOOLEAN: esprime una logoica. Qui vengono messi a confronto due dati e la risposta può essere vera o falsa." +
"- UNDEFINED: esprime una variabile che può essere dichiarata o no, ma mai utilizzata e priva di contenuto." +
"- NULL: esprime una variabile vuota, già utilizzata ma attualmente priva di contenuto." +
"- OBJECT: contiene tra parentesi graffe e divise da virgola proprietà descritte con coppie nome:valore")


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Un oggetto è un insieme di dati che ha come caratteristica una chiave univoca per definire il dato")

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let somma = 12+20;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nome = "Jessica"
console.log(nome);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sottrazione = 4-x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1!==name2);
console.log(name1!==name2.toLowerCase());