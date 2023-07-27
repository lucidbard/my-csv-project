const fs = require('fs');
const csv = require('csv-parser');

const logger = require('./logger');

const processCSV = (inputFilePath, outputFilePath) => {
  const results = [];

  fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      logger.info(`Processed ${results.length} rows`);
      fs.writeFile(outputFilePath, JSON.stringify(results), (err) => {
        if (err) {
          logger.error(`Error writing to output file: ${err}`);
        } else {
          logger.info(`Results saved to ${outputFilePath}`);
        }
      });
    });
};

module.exports = {
  processCSV,
};