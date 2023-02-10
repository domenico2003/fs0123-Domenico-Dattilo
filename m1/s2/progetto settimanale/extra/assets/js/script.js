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
        let risultato =this.value(Function(document.querySelector('#display').value))
        console.log(risultato)
    }
   

