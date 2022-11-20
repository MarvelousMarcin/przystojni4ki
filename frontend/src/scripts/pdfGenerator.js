import { jsPDF } from "jspdf";

const GeneratePdf = async (e) => {

  e.preventDefault();

  const response = await fetch("http://localhost:2000/questions/getAll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ year: "1917", difficulty: "hard", amount: "40" }),
    });
  
  const data = await response.json();

  const doc = new jsPDF();

  let height = 50;
  let counter = 0;

  for(let i = 0; i < data.length; i++) {
    doc.text(data[i].content, 10, height);
    doc.rect(5, height - 10, 200, 30);
    for(let j = 0; j < data[i].answers.length; j++) {
      height+=10;
      doc.text(data[i].answers[j], 10, height)
    }
    height+=20;
    counter++;

    if(counter%7==0) {
      height = 50;
      doc.addPage('a4', 'portrait')
    }
  }
  
  doc.line(30, 30, 200, 30);
  doc.save("quiz.pdf");
}

export default GeneratePdf;
