function Displaytime(){
var time=new Date();
var hour=time.getHours();
writeToConsole();
let minute=time.getMinutes();
let second=time.getSeconds();
let session=document.getElementById("session")
document.getElementById("saacad").innerHTML=hour;
document.getElementById("daqiiqad").innerHTML=minute;
document.getElementById("mirir").innerHTML=second;


if(hour>12){
    session.innerHTML="pm"
}
else{
    session.innerHTML="am"
}
}
 setInterval(Displaytime, 10);


