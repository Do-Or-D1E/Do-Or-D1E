let todo="";
let counter=0;

document.getElementById('add').onclick = function(){
    counter++;
    
    if(counter>3){
        todo="LIMIT REACHED YOU CANNOT ADD MORE THAN 3 TIMES, coz too much load on the server, use your brain instead";
        addh2(todo);
    }
    else{
        todo="hello world";
    addh2(todo);
    }
}
function addh2(text) {
    let h2 = document.createElement('h2');
    h2.textContent = text;
    document.getElementById('container').appendChild(h2);
}
