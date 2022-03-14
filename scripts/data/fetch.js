import { myData } from "./myData.js";
import { insertContent } from "./template.js";

const auth = "1e19898c87464e239192c8bfe422f280";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";

const fetchData = async (query) => {
  await fetch(
    `${endpoint}${query}&authorization=${auth}&refine=true&facet=type(movie)&output=json`
  )
    .then((res) => res.json())
    .then(myData)
    .then(insertContent)
    .catch((err) => {
      console.log(err);
    });
};

export { fetchData };
