import { myData } from "./myData.js";
import { insertContent } from "./pages/template.js";
import { routing } from "../routing/routes.js";
// import { insertDetailInformation } from "./pages/detail.js";
import { insertDetailInformation } from "./pages/detail.js";

const auth = "1e19898c87464e239192c8bfe422f280";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";

const content = document.getElementById("movieContainer");

const fetchData = async (query) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  await fetch(
    `${endpoint}${query}&authorization=${auth}&refine=true&facet=type(movie)&output=json`
  )
    .then((res) => res.json())
    .then(myData)
    .then(insertContent)
    .then(routing)
    .catch((err) => {
      console.log(err);
    });
};

export { fetchData };
