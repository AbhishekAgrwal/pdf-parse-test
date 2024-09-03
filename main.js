const path = require("path");
const fs = require("fs");
const pdfParse = require("pdf-parse");

// Configure the sample PDF file name here.
const PDF_FILE_NAME = "sample3.pdf";

// Program
const filePath = path.join(__dirname, PDF_FILE_NAME);
console.log(filePath);

const dataBuffer = fs.readFileSync(filePath);

async function parsePdf() {
  try {
    pdfParse(dataBuffer).then((data) => console.log(JSON.stringify(data.text)));
  } catch (e) {
    console.error("Error parsing PDF content from file buffer.", e);
  }
}

parsePdf();
