var timer= null

function change(color)
{
    var bg=document.getElementById('bgcolor').value;
    document.getElementById('resultbox').style.backgroundColor=bg;
    var tc=document.getElementById('tcolor').value;
    document.getElementById('resultbox').style.color=tc;
    var ts=document.getElementById('tsize').value;
    document.getElementById('resultbox').style.fontSize=ts+'px';
    var bw=document.getElementById('bwidth').value;
    document.getElementById('resultbox').style.width=bw+'px';
    var bh=document.getElementById('bheight').value;
    document.getElementById('resultbox').style.height=bh+'px';
    var rad=document.getElementById('radius').value;
    document.getElementById('resultbox').style.borderRadius=rad+'%';
}

function init()
{   
    clearTimeout(timer)
    car=document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px';
}

function startani()
{   if (car.style.left>=500)
    {
        
    }
    car.style.left=parseInt(car.style.left)+2+'px';
    timer=setTimeout(startani,50)
}

function stopani()
{
    clearTimeout(timer)
}

