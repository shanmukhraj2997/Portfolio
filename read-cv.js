const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync("dist/assets/General-CV(Sunny')-BnyBSLHl.pdf");

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
