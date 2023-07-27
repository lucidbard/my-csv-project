const fs = require('fs');
const csv = require('csv');

const inputFile = './data/input.csv';
const outputFile = './output/output.csv';
let linesRemoved = 0;
let totalLines = 0;
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  csv.parse(data, {info: true, columns:true}, function(err, parsedData) {
    csv.transform(parsedData, 
    function({info, record}) {
      // Delete records that contain either "woke up" or "woke me up"
      if (record.Text.includes('woke up') || record.Text.includes('woke me up')) {
        linesRemoved++;
        totalLines++;
        return null
      } else {
        totalLines++;
        return record
      }
    }, function (err, transformedData){
      csv.stringify(transformedData, {header:true}, function(err, data) {
        fs.writeFile(outputFile, data, (err) => {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log('Output saved to', outputFile);
  console.log("Removed " + linesRemoved + " tweets");
        });
      });
    });
  });
});