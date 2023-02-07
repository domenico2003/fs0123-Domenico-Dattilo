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

let dataType1 = 'string';
console.log(typeof dataType1);//dato tipo stringa

let dataType2 = 10;
console.log(typeof dataType2);//dato tipo numero

let dataType3 = true;
console.log(typeof dataType3);//dato tipo booleano

let dataType4 = false;
console.log(typeof dataType4);//dato tipo booleano

let dataType5 = ['Array'];
console.log(Array.isArray(dataType5));//dato tipo array

let dataType6 = { Object }
console.log(typeof dataType6);//dato tipo oggetto


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = 'Domenico';
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12;
let number2 = 20;
let number3 = number1 + number2;
console.log(number3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//prima parte
name = 'Dattilo';
console.log(name);

//seconda parte
/*
const costante = '100';
costante = '200';
console.log(costante); //Assignment to constant variable.
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number4 = 4;

let sottrazione = x - number4;
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';

//primo metodo

if (name1 != name2) {
  console.log('non è uguale')
} else {
  console.log('è uguale')
}

//secondo metodo

let disuguaglianza = (name1 != name2) ? 'non è uguale' : 'è uguale';
console.log(disuguaglianza);

//terzo metodo

(name1 != name2) ? console.log('non è uguale') : console.log('è uguale');

//extra esercizio

let disuguaglianza1 = (name1.toLowerCase != name2.toLowerCase) ? 'non è uguale' : 'è uguale';
console.log(disuguaglianza1);

//exstra

document.getElementById('risp').innerHTML = `il tuo nome ${disuguaglianza}`