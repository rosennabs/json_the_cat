const {fetchBreedDescription} = require('./breedFetcher');
const cmdLine = process.argv.slice(2).toString();

fetchBreedDescription(cmdLine, (error, descp) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(descp);
  }
});