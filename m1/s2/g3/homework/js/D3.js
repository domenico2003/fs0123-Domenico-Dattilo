/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1= 6
let num2= 3

function isBigger(a,b){
  if(a>b){
    return(`${a} è più grande di ${b}`)
  }else if(b>a){
    return(`${b} è più grande di ${a}`)
  }else{
    return("I numeri sono uguali")
  }
}


console.log(isBigger(num1,num2))

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 3

function notEqual(a){
  if (a != 5) {
    return('not equal')
  }
}

console.log(notEqual(num3))

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = 65

function divideFor5(a){
  if (a % 5 == 0) {
    return('divisibile per 5')
  }
}

console.log(divideFor5(num4))

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number5 = 8
let number6 = 8

function is8(a,b){

  if(a == 8 || b == 8 ){
    return('è 8')
  }else if((a + b == 8)|| (a-b == 8) || (b-a == 8)){
    return('la loro somma/sottrazione è 8')
  }else {
    return('la loro sottrazione/addizione non è 8')
  } 
}

console.log(is8(number5,number6))


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppinCart = 50;
let totalShoppingCart = shoppinCart + isShoppingfree(shoppinCart)

function isShoppingfree(a){
  if (a > 50) {
    return(0)
  }else {
    return (10)
  }
}

console.log(totalShoppingCart)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let prezzoProdotto = 40;
let prezzoScontato1 = prezzoScontato(prezzoProdotto)
let prezzoFinale = prezzoScontato1 + isShoppingfree(prezzoScontato1)
console.log(prezzoScontato1)


function prezzoScontato(a){
   return a - (a * 0.2)
}


function isShoppingfree(a){
  if (a > 50) {
    return(0)
  }else {
    return (10)
  }
}

console.log(prezzoFinale)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num9=5;
let num10=10;
let num11=11;

/*let array = [num9,num10,num11]
array.sort(function(a,b){return b-a})*/

let array = []
array.push(num9,num10,num11)
array.sort(function(a,b){return b-a})
console.log(array)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num12 = 12;

function numero(a){
  if (typeof (a) == "number") {
    return('number')
  }else{
    return('not a number')
  }

}

console.log(numero(num12))

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num13 = 14;

function isEven(a){
  if (a%2 == 0){
    return(`${a} è pari`)
  }else{
    return(`${a} è dispari`)
  }
}


console.log(isEven(num13))
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/


/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills.pop(1)
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array1 = []

for (u =1; u <= 10; u++){
  array1.push(u)
}

console.table(array1)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array1.splice(-1,1,100)
console.log(array1)