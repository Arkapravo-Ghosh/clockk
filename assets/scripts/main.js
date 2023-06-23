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

  document.getElementById("clock").innerText =
    hour + ":" + minute + ":" + second;
}

setInterval(theClock, 1000);
