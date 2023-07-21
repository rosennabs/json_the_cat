const request = require('request');
const cmdLine = process.argv.slice(2);
const searchUrl = `https://api.thecatapi.com/v1/breeds/search?q=${cmdLine}`;


//Requesting for a cat breed's info
request(searchUrl, (error, response, body) => {

  if (error) { //Handles request errors and print the error details to the screen
    console.log('Request Failed:', error);
    process.exit;
  }
  const data = JSON.parse(body); //converts JSON string to an object

  const breedExisits = function() { //iterates through the resource array and compares the breed id or name to cmdline argument
    for (obj of data) {
      if (obj.name.toLowerCase() === cmdLine[0].toLowerCase() || obj.id.toLowerCase() === cmdLine[0].toLowerCase()) {
        return true;
      }
    }
  };
 
  if (breedExisits()) {
    console.log('description:', obj.description); //prints the description of the breed.
  } else { //prints a message if breed does not exist in the array.
    console.log("Breed not found in the resource.");
  } 
  
});