function addZero(i) {
  return i < 10 ? "0" + i : i;
}

let is24hourFormat = true;

const toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", () => {
  is24hourFormat = !is24hourFormat;
  updateTime();
})

function updateTime() {
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ,"Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let hour = addZero(d.getHours());
let minute = addZero(d.getMinutes());
let second = addZero(d.getSeconds());
let day = weekday[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

let period = ""

  if (!is24hourFormat) {
    period = hour <= 12 ? "AM" : "PM";
    hour = hour % 12 || 12
    toggleBtn.textContent = period;
  } else {
    toggleBtn.textContent = "24H"
  }

document.getElementById("hours").innerHTML = hour
document.getElementById("minutes").innerHTML = minute
document.getElementById("seconds").innerHTML = second
document.getElementById("currentDate").innerHTML = `${day}, ${date} ${month} ${year}`;


}

updateTime();
setInterval(updateTime, 1000);