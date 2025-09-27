

function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds} Hrs`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);



/* Alternatively  
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var clock = setInterval(
  function time(){
    var date_now = new Date();
    var hrs = date_now.getHours();
    var min = date_now.getMinutes();
    var sec = date_now.getSeconds();
    
    if(hr< 10){
      hrs = "0" + hrs;
    }

    if(min< 10){
      min = "0" + min;
    }

    if(sec< 10){
      sec = "0" + sec;
    }


    hour.texyContent = hrs;
    minute.textContent = min;
    second.textContent = sec;
  }, 1000
} */