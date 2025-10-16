function updateTime() {
  document.getElementById("time").textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime();
