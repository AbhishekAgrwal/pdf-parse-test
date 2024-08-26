const path = require("path");
const fs = require("fs");
const pdfParse = require("pdf-parse");

// Configure the sample PDF file name here.
const PDF_FILE_NAME = "sample.pdf";

// Program
const filePath = path.join(__dirname, PDF_FILE_NAME);
console.log(filePath);

const dataBuffer = fs.readFileSync(filePath);

async function parsePdf() {
  try {
    pdfParse(dataBuffer).then((data) => console.log(data));
  } catch (e) {
    console.error("Error parsing PDF content from file buffer.", e);
  }
}

parsePdf();
