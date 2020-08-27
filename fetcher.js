const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    let stats = fs.statSync(args[1]);
    let fileSize = stats["size"];
    console.log(`Downloaded and saved ${fileSize} bytes to ${args[1]}`);
  });
});