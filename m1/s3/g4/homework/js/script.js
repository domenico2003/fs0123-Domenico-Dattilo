      /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */
       let title = document.querySelector("h1");
       const changeTitle = function (newTitle) {
         
 
         title.innerHTML = newTitle;
       };
       changeTitle("Nuovo titolo Epicode");
 
       /* ESERCIZIO 2
        Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
       */
       //element.Classlist.replace()
       const addClassToTitle = function () {
         
         title.classList.remove('myClass')
         title.classList.add('myHeading')
         
         console.log(title);
       };
 
       addClassToTitle()
       /* ESERCIZIO 3
        Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
       */
       
       const changePcontent = function (stringa) {
         let p = document.querySelectorAll('p');
         for (let paragrafo of p) {
           paragrafo.innerHTML = stringa;
         }
       };
 
       changePcontent('Il contenuto cambiato dei p')
       /* ESERCIZIO 4
        Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
       */
 
       const changeUrls = function (indirizzo) {
         let a = document.querySelector('a')
         a.href = indirizzo;
         console.log(a)
       }
 
       changeUrls('https://www.google.com');
       //changeUrls("https://www.epicode.com");
 
 
 
       /* ESERCIZIO 5
        Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
       */
 
       const addToTheSecond = function(parametro) {
         
         let ul = document.getElementById('secondList');
         let newLi = document.createElement('li');
         newLi.innerText = parametro;
         ul.appendChild(newLi);
         
         console.log(ul)
         
       };
       
       addToTheSecond("Quarto")
 
 
       /* ESERCIZIO 6
        Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
       */
 
       const addParagraph = function (content) {
         let div = document.querySelector('div');
         let paragraph = document.createElement('p');
         paragraph.textContent = content; 
         div.appendChild(paragraph);
         
       };
       let test = 'Questo è un nuovo paragrafo'
       addParagraph(test);
       /* ESERCIZIO 7
        Scrivi una funzione per far scomparire la prima lista non-ordinata.
       */
 
       const firstUlDisappear = function () {
         //
         let primaLi = document.getElementById('firstList');
         primaLi.remove()
       };
 
         firstUlDisappear()
       /* ESERCIZIO 8
        Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
       */
 
       const paintItGreen = function () {
         let green=document.querySelectorAll('ul');
         for (let lista of green) {
           lista.style.backgroundColor = 'green'
         }
       };
 
       paintItGreen()
 
       /* ESERCIZIO 9
        Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
       */
        title = document.querySelector("h1");
 
       const makeItClickable = function (colore) {
         title.addEventListener("click", (e)=>{
           if(e.target.style.color !== colore){
            e.target.style.color= colore
           }else{e.target.style.color= 'red'}
         });
       };
 
       makeItClickable("green");
     
 
       
       /* ESERCIZIO 10
        Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
       */
       let footer = document.querySelector('.footer')
       const changeFooterText = function (testoP,testoH2) {
         footer.addEventListener("click", ()=>{
           footer.innerText=''
           let p =document.createElement('p')
           let h2 =document.createElement('h2')
           p.textContent= testoP
           h2.textContent=testoH2
           footer.appendChild(p)
           footer.appendChild(h2)
         });
           
       };
     console.log(footer)
       changeFooterText("ciao sono un p","ciao sono un h2");
     
       
 
       /* ESERCIZIO 11
        Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
       */
 
       const inputField = document.getElementById("input-field");
       
       inputField.addEventListener("keydown",()=>{
         console.log(inputField.value)
         inputField.value = "";
       }) 
       /* ESERCIZIO 12
        Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
       */
 
       window.onload = function () {
         alert('Benvenuto nella pagina')
       };