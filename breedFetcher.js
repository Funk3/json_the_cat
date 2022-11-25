const request = require("request")
const userInput = process.argv[2].slice(0,4)
const url = `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`

const breedFetcher = () => {
  request(url, (error, response, body) => {
    const result = JSON.parse(body)
    if (result.length === 0) {
      console.log("Sorry, that breed doesn't exist");
      return;
    } 
      console.log(result[0].description);
  });
};

breedFetcher()

