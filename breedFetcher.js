const request = require("request");

//Gets the description of the cat breed.
const fetchBreedDescription = function (breedName, callback) {
  const searchUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(searchUrl, (error, response, body) => {
    
    if (error) {
      callback("Request Failed", null);
      process.exit();
    } 
    const data = JSON.parse(body); //converts JSON string to an object
    

    if (data.length === 0) {
      return callback("Breed not found in the resource.", null);
    }

    
    //iterates through the resource array and compares the breed id or name to cmdline argument
    for (let obj of data) {
      if (
        obj.name.toLowerCase() === breedName.toLowerCase() ||
        obj.id.toLowerCase() === breedName.toLowerCase()
      ) {
        callback(null, obj.description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };


