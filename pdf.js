function exportPDF(){

const { jsPDF } = window.jspdf;

let doc=new jsPDF();

let table=document.getElementById("planner").innerText;

doc.text("Time Craft Weekly Planner",20,20);

doc.text(table,20,40);

doc.save("planner.pdf");

}