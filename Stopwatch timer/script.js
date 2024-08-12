const minuteLabel = document.getElementById("min");
const secondLabel = document.getElementById("sec");
const millisecondLabel = document.getElementById("millisec");

const startBtn = document.getElementById("startbtn");
const lapsBtn = document.getElementById("lapsbtn");
const pauseBtn = document.getElementById("pausebtn");
const resetBtn = document.getElementById("resetbtn")

const lapList = document.getElementById("laplist")

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startBtn.addEventListener('click', startTimer);
lapsBtn.addEventListener('click', lapsTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer() {
    interval = setInterval(updateTimer, 10)  // delay timer..10
    startBtn.disabled = true;  //button stop click one time

}

function lapsTimer() {           //laps button
    addtoLaplist();
    
    startBtn.disabled = false;

}

function pauseTimer() {            //pause button
    clearInterval(interval);
    startBtn.disabled = false;

}

function resetTimer() {           //reset button
    clearInterval(interval);
    resetTimerData();
    lapList.innerHTML = '';
    startBtn.disabled = false;

}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {   //1000 -> 1 seconds = 1000 millisecond
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer() {               // call labal
    millisecondLabel.textContent = padTime(milliseconds);
    secondLabel.textContent = padTime(seconds);
    minuteLabel.textContent = padTime(minutes);    //show time 00

}

function padTime(time) {
    return time.toString().padStart(2, '0')         //create time 00  padStar is function
}

function resetTimerData() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTimer();

}
//print laplist function
function addtoLaplist(){ 
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

    const listItem = document.createElement('li')

    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span> ${lapTime}`;
    lapList.appendChild(listItem);
}


console.log('created by ravi...');