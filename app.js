
const appendSec = document.querySelector("#seconds");
const appendMin = document.querySelector("#minutes");
const appendHr = document.querySelector("#hours");
const appendTens = document.querySelector("#tens");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

var hr = 00;
var min = 00;
var sec = 00;
var tens = 00
var time; //stores timer values? Makes variable available to clearInterval functions

var stopwatchOn = false;


function startTimer(){
    tens++; // adding ONE to the tens variable every 100 milliseconds
    if (tens<10){
        appendTens.innerHTML = "0" + tens;
    } else {
        appendTens.innerHTML = tens;
    }
    if (tens>9){
        sec++;
        appendSec.innerHTML = "0" + sec;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (sec >9){
        appendSec.innerHTML = sec;
    }
    if (sec >59){
        min++;
        appendMin.innerHTML = "0" + min;
        sec = 0;
        appendSec.innerHTML = "0" +0;
    }
    if (min >9){
        appendMin.innerHTML = min;
    }
    if (min >59){
        hr++;
        appendHr.innerHTML = "0" + hr;
        min = 0;
        appendMin.innerHTML = "0" +0;

    } if (hr>9){
        appendHr.innerHTML = hr;
    }
    if (hr == 24){
        clearInterval(time);
        stopwatchOn = false;
    }
}

start.addEventListener("click", function(){
    if (stopwatchOn == false){
    time =setInterval(startTimer, 100); //setInterval calls a function at specified intervals (in milliseconds) | continues calling function until clearInterval() is called
}
    stopwatchOn = true;
})


function stopTimer(){
    stopwatchOn = false;
    clearInterval(time);
}

stop.addEventListener("click", function(){
    stopTimer();
})

function resetTimer() {
    if(stopwatchOn == false){
        hr = 0;
        min = 0;
        sec = 0;
        tens = 0;
        appendHr.innerHTML = "0" + hr;
        appendMin.innerHTML = "0" + min;
        appendSec.innerHTML = "0" + sec;
        appendTens.innerHTML = "0" + tens;
    } else if (stopwatchOn == true){
        clearInterval(time);
        stopwatchOn = false;
    }
}

reset.addEventListener("click", function(){
    resetTimer();
})