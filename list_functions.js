//document.addEventListener('DOMContentLoaded', processList, false);

function processList(event) {
    console.log(event)
    return "processed"
}

const form = document.getElementById("form");
const log = document.getElementById("log");
if (form){
    form.addEventListener("submit", processList);
}

var sampleList = ["red", "blue", "green", "orange"]

var newList = sampleList.map(element => { return `<li>${element}</li>`}).join("")

document.getElementById("newList").innerHTML = newList

console.log(newList)
  