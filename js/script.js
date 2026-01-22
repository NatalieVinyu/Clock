function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

function updateTime(){
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

console.log(hour, minute, second)
document.getElementById("hours").innerHTML = hour
document.getElementById("minutes").innerHTML = minute
document.getElementById("seconds").innerHTML = second
document.getElementById("currentDate").innerHTML = `${day}, ${date} ${month} ${year}`;
}

updateTime();
setInterval(updateTime, 1000);