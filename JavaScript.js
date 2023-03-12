const timerTimeElement = document.querySelector(".timer-time");
const timerLineFillElement = document.querySelector(".timer-line-fill");
let remainingSeconds = 180; // 3 minutes

function updateTimer() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  if (remainingSeconds <= 0) {
    clearInterval(intervalId);
    timerTimeElement.textContent = "Expired";
    return;
  }

  timerTimeElement.textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  let fillWidth = (100 * remainingSeconds) / 180;
  if (remainingSeconds <= 90) {
    timerLineFillElement.classList.add("yellow");
    fillWidth = (100 * remainingSeconds) / 90;
  }
  if (remainingSeconds <= 30) {
    timerLineFillElement.classList.remove("yellow");
    timerLineFillElement.classList.add("red");
    fillWidth = (100 * remainingSeconds) / 30;
  }
  timerLineFillElement.style.width = `${fillWidth}%`;
}

updateTimer();

// Call this function every second to update the timer and bar progress
const intervalId = setInterval(() => {
  remainingSeconds--;
  updateTimer();
}, 1000);
