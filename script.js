let timer;
let timeLeft = 1500; // Default 25 minutes
let running = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                document.getElementById('alarm').play();
                stopTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 1500;
    updateDisplay();
}

function stopTimer() {
    pauseTimer();
    timeLeft = 0;
    updateDisplay();
}

function setMode(minutes) {
    pauseTimer();
    timeLeft = minutes * 60;
    updateDisplay();
}

updateDisplay();