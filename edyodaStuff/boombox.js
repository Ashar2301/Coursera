var selectedElement;
var audio = document.querySelectorAll('audio');

document.body.addEventListener('keydown' , function(e){
    var keyCode  = e.keyCode;
    if(keyCode === 65)
    {
        var aStyle = document.getElementById('a');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";  
        audio[0].play();      
    }
    if(keyCode === 83)
    {
        var aStyle = document.getElementById('s');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";  
        audio[1].play();
    }
    if(keyCode === 68)
    {
        var aStyle = document.getElementById('d');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";
        audio[2].play();  
    }
    if(keyCode === 70)
    {
        var aStyle = document.getElementById('f');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";  
        audio[3].play(); 
    }
    if(keyCode === 71)
    {
        var aStyle = document.getElementById('g');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";  
        audio[4].play();
    }
    if(keyCode === 72)
    {
        var aStyle = document.getElementById('h');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";
        audio[5].play();  
    }
    if(keyCode === 74)
    {
        var aStyle = document.getElementById('j');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";
        audio[6].play();  
    }
    if(keyCode === 75)
    {
        var aStyle = document.getElementById('k');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";  
        audio[7].play();
    }
    if(keyCode === 76)
    {
        var aStyle = document.getElementById('l');
        aStyle.style.border = "2px dotted red";
        aStyle.style.color = "red";  
        audio[8].play();
    }
})

document.body.addEventListener('keyup',function(){
    var bodyelement = document.querySelectorAll('.elements')
   
    for(var i=0 ;i<bodyelement.length ; i++)
    {
        bodyelement[i].style.border = 'solid 1px black';
        bodyelement[i].style.color = 'black';
    }
})