//per aggiungere numeri al display
function display(elemento){
    let tasto= elemento.getAttribute('data-tasto')
    let display = document.querySelector('#display')
    
    display.value += tasto
}


//per far resettare la calcolatrice
function cancella(){
    let display = document.querySelector('#display')
    display.value = ""
}

//per effettuare il calcolo
   
function calcolo(){
let display=document.querySelector('#display')

/*let operazione = display.value
operazione.replace("",'')

display.value=operazione*/
 display.value = parseFloat(display.value)
}



