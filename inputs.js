function createInput(){
    let inputCount=document.getElementById('inputCount').value;
    let inputs = document.getElementById('inputs');
    inputs.innerHTML = "";
    
    for(let i = 0; i < inputCount; i++){
        inputs.innerHTML += "<input type='text' placeholder ='Input number "  + (i+1) + "'>";
    }
}