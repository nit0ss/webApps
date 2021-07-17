window.onload = function(){
    clock();
    setInterval(clock,1000);

}

function clock(){

    const d = new Date();
    var minutes = d.getMinutes();;
    var hours = d.getHours();;
    var seconds = d.getSeconds();;
    var ex = "AM";
    
    
    

    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        ex = "PM";
    }
    
    hours = (ex == "AM") ? "0" + hours : hours+12;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("ss").innerHTML = seconds;

    document.getElementById("hs").innerHTML = hours;
    
    document.getElementById("mm").innerHTML = minutes;
    document.getElementById("ex").innerHTML = ex;
 
    

}