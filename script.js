let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let millisecond = document.getElementById("milliseconds");
let time = document.getElementById("time");
let trackerM = 1;
let trackerS = 1;
let trackerMs = 1;
let firstClick = true;
////////////////////////////////////////////////////
function minutes() {
  minute.innerHTML = trackerM++;
}
////////////////////////////////////////////////////
function seconds() {
  second.innerHTML = trackerS++;
  if (trackerS === 60) {
    trackerS = 1;
  }
}
////////////////////////////////////////////////////
function milliseconds() {
  millisecond.innerHTML = trackerMs++;
  if (trackerMs === 100) {
    trackerMs = 1;
  }
}
////////////////////////////////////////////////////
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
    if (firstClick) {
      minutesInterval = setInterval(minutes, 60000);
      secondsInterval = setInterval(seconds, 1000);
      millisecondsInterval = setInterval(milliseconds, 10);
      firstClick = !firstClick;
    } else {
      clearInterval(minutesInterval);
      clearInterval(secondsInterval);
      clearInterval(millisecondsInterval);
      addTimeToPage(minutes, seconds, milliseconds);
      firstClick = !firstClick;
    }
  }
};
////////////////////////////////////////////////////
function addTimeToPage(minutes, seconds, milliseconds) {
  const h4 = document.createElement("h4");
  if (trackerM - 1 > 0 && trackerM - 1 < 1) {
    h4.innerText = `${trackerM - 1} minute ${trackerS - 1} seconds`;
  } else if (trackerM - 1 > 1) {
    h4.innerText = `${trackerM - 1} minutes ${trackerS - 1} seconds`;
  } else {
    h4.innerText = `${trackerS - 1} seconds`;
  }
  time.appendChild(h4);
  console.log(trackerM - 1, trackerS - 1, trackerMs - 1);
}
