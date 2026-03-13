function aiSuggestion(){

let study=localStorage.getItem("study");
let sleep=localStorage.getItem("sleep");

let suggestion="";

if(study>=5){

suggestion="High productivity schedule recommended.";

}
else if(study>=3){

suggestion="Balanced study plan suggested.";

}
else{

suggestion="Light study plan suggested.";

}

if(sleep<6){

suggestion+=" Increase sleep for better focus.";

}

document.getElementById("aiText").innerText=suggestion;

}