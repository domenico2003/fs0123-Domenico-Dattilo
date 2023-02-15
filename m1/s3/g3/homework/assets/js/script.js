let target= document.getElementById("target");
let input = document.getElementById("testo");



function test() {

    let element = document.createElement("div");
    let bottone= document.createElement('button');
    let li =document.createElement('li')
    element.classList.add('task')
    bottone.classList.add('bottone')
    li.classList.add('li')

    if(input.value  !==  ""){
        li.appendChild(document.createTextNode(input.value));
        document.getElementById('target').appendChild(element);
        element.appendChild(li)
        element.appendChild(bottone)
        bottone.appendChild(document.createTextNode('DELETE'));
        bottone.addEventListener('click',()=>{
            element.remove() })
    
    }
  
}
 
