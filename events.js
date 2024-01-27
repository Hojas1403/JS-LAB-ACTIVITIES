document.getElementById('changecolor').addEventListener('click', function(){
    document.getElementById('changediv').style.backgroundColor = randomColor();

});

function randomColor(){

    let values = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += values[Math.floor(Math.random()*16)];
    }
    return color;
}

document.getElementById('changetext').addEventListener('click', function(){
    let newtext = document.getElementById('textinput').value;
    document.getElementById('changediv').innerText=newtext;
});

document.getElementById('hoverparagraph').addEventListener('mouseover',function(){
    this.style.backgroundColor = randomColor();        
});

document.getElementById('hoverparagraph').addEventListener('mouseleave',function(){
    this.style.backgroundColor = 'inherit';      
});