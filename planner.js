let study=parseInt(localStorage.getItem("study"));
let hobby=parseInt(localStorage.getItem("hobby"));
let sleep=parseInt(localStorage.getItem("sleep"));

let table=document.getElementById("planner");

let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function addRow(day,time,activity){

let row=table.insertRow();

let cell1=row.insertCell(0);
let cell2=row.insertCell(1);

cell1.innerHTML=day+"<br>"+time;
cell2.innerHTML=activity;

}

function allocateFreeTime(day,start,end,label,hours){

let startTime=new Date("2024-01-01 "+start);
let endTime=new Date("2024-01-01 "+end);

let freeMinutes=(endTime-startTime)/60000;
let requiredMinutes=hours*60;

if(requiredMinutes<=freeMinutes){

let endSlot=new Date(startTime.getTime()+requiredMinutes*60000);

addRow(day,
startTime.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})+
" - "+
endSlot.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
label);

return requiredMinutes;

}

return 0;

}

for(let d=0;d<days.length;d++){

let day=days[d];

addRow(day,"8:00 AM - 12:30 PM","Fixed Study");
addRow(day,"3:50 PM - 5:30 PM","Fixed Study");
addRow(day,"11:00 PM - 5:30 AM","Sleep");

let remainingStudy=study;
let remainingHobby=hobby;

remainingStudy-=allocateFreeTime(day,"1:30 PM","3:40 PM","Study Session",remainingStudy);
remainingHobby-=allocateFreeTime(day,"6:00 PM","8:00 PM","Hobby / Exercise",remainingHobby);

addRow(day,"8:00 PM - 10:30 PM","Study Session");

}