const processArgs = process.argv.slice(2);
const fs = require('fs');

const request = require('request');
request(processArgs[0], function (error, response, body) {
  if (error) {
    console.error("URL invalid please enter a valid URL")
  }
  fs.writeFile(processArgs[1], `Downloaded and saved ${body.length} bytes to ${processArgs[1]}`, err => {
    if ({err}) {
      console.error("The file path you provided is not valid");
    }
  })
});