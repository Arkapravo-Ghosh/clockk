let beep = new Audio('assets/audio/beep.wav');

function theClock() {
  let fullTime = new Date();

  let hour = fullTime.getHours();
  hour = hour.toString();
  hour = hour.padStart(2, "0");

  let minute = fullTime.getMinutes();
  minute = minute.toString();
  minute = minute.padStart(2, "0");

  let second = fullTime.getSeconds();
  second = second.toString();
  second = second.padStart(2, "0");

  let desktop_time = hour + ":" + minute + ":" + second;

  // beep.play();
  document.getElementById("clock").innerText = desktop_time;
  document.getElementById("hr").innerText = hour;
  document.getElementById("min").innerText = minute;
  document.getElementById("sec").innerText = second;
};

setInterval(theClock, 1000);
