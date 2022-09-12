function change(){
    var div =document.getElementById('box');
    var bgcolor=document.getElementById('bgcolor').Value;
    div.style.background-backgroundColor. bgcolor;
    var width =document.getElementById('width').value;
    div.style.width=width+ "px";
    var height =document.getElementById('height').value;
    div.style.height=height+"px";
    var div =document.getElementById('text').value;
    div.style.backgroundColor= text;

}
var car =null;
var timer=null;
function init(){
    car=document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px';
    clearTimeout(timer);
    document.getElementById('Dan').innerHTML='';
    

}
function move(){
    car.style.left=parseInt(car.style.left)+100+"px";
    timer=setTimeout(move,300);
    if( parseInt(car.style.left) >= 1650 )
    {
        stop();
        document.getElementById('Dan').innerHTML='<div id ="danger" style="border:1px solid red; background-color: red; color: white ; position: absolute; right: 100px; bottom: 700px; width: 150px; height: 100px;" >DANGER</div>'
    }
}
function stop(){
    clearTimeout(timer);

}
