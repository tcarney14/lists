document.addEventListener('DOMContentLoaded', logSubmit, false);

function logSubmit(event) {
    log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    event.preventDefault();
    console.log("TESTTEST")
}

const form = document.getElementById("form");
const log = document.getElementById("log");
if (form){
    form.addEventListener("submit", logSubmit);
}
  