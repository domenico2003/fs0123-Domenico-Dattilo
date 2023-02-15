let target= document.getElementById("target");
let input = document.getElementById("testo");



function test() {

    let element = document.createElement("div");
    element.classList.add('task')

    let bottone= document.createElement('button');
    bottone.classList.add('bottone')

    let li =document.createElement('li')
    li.classList.add('li')
    
    if(input.value  !==  ""){
        li.appendChild(document.createTextNode(input.value));
        document.getElementById('target').appendChild(element);
        element.appendChild(li)
        element.appendChild(bottone)
        bottone.appendChild(document.createTextNode('DELETE'));    
    }

    bottone.addEventListener('click',()=>{element.remove() })
    
   
    if(li.style.textDecoration !== 'line-through'){
        li.addEventListener('click',()=>{li.style.textDecoration= 'line-through'})
    }
    
    input.value = ""
}
 
