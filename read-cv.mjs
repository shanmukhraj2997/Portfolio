import fs from 'fs';
import pdfParse from 'pdf-parse';

const pdfFile = fs.readFileSync("dist/assets/General-CV(Sunny')-BnyBSLHl.pdf");

pdfParse(pdfFile).then(function(data) {
    console.log(data.text);
});
