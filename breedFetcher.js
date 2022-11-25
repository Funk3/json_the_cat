const request = require("request");

const fetchBreedDescription = (breedName) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const result = JSON.parse(body);
    if (result.length === 0) {
      console.log("Sorry, that breed doesn't exist");
      return;
    }
    console.log(result[0].description);
  });
};

module.exports = {
  fetchBreedDescription,
}
