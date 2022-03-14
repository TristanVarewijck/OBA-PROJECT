const auth = "1e19898c87464e239192c8bfe422f280";
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
let query = "money";

// case: ondernemen movies
//zoeken.oba.nl/api/v1/search/?q=tiger&authorization=1e19898c87464e239192c8bfe422f280&facet=type(movie)&refine=true&output=json

https: fetch(
  `${endpoint}${query}&authorization=${auth}&refine=true&facet=type(movie)&output=json`
)
  .then((res) => res.json())
  .then((data) => console.log(data.results))
  .catch((err) => {
    console.log(err);
  });
