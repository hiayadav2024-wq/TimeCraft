function savePreferences(){

let study=document.getElementById("study").value;
let hobby=document.getElementById("hobby").value;
let sleep=document.getElementById("sleep").value;

localStorage.setItem("study",study);
localStorage.setItem("hobby",hobby);
localStorage.setItem("sleep",sleep);

window.location="planner.html";

}

function addTask(){

let task=document.getElementById("taskInput").value;
let time=document.getElementById("taskTime").value;

let reminders=JSON.parse(localStorage.getItem("reminders")) || [];

reminders.push({task:task,time:time});

localStorage.setItem("reminders",JSON.stringify(reminders));

loadReminders();

scheduleReminder(task,time);

}

function loadReminders(){

let list=document.getElementById("taskList");

list.innerHTML="";

let reminders=JSON.parse(localStorage.getItem("reminders")) || [];

reminders.forEach(r=>{

let li=document.createElement("li");

li.innerText=r.task+" at "+r.time;

list.appendChild(li);

});

}

window.onload=loadReminders;

function saveTasks(){

localStorage.setItem("tasks",document.getElementById("taskList").innerHTML);

}

window.onload=function(){

let saved=localStorage.getItem("tasks");

if(saved){

document.getElementById("taskList").innerHTML=saved;

}

}