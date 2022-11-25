const request = require("request")
const userInput = process.argv[2].slice(0,4)
const url = `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`

const breedFetcher = () => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

breedFetcher()

