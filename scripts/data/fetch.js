import { cleanData } from "./cleanData.js";
import { insertContent } from "./pages/template.js";
import { routing } from "../routing/routes.js";
// import { insertDetailInformation } from "./pages/detail.js";
import { displayLoading, hideLoading } from "../states/loading.js";
import { hideEmptyState } from "../states/empty.js";

const auth = "1e19898c87464e239192c8bfe422f280";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const content = document.getElementById("movieContainer");

const fetchData = async (query) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  hideEmptyState();
  displayLoading();
  await fetch(
    `${endpoint}${query}&authorization=${auth}&refine=true&facet=type(movie)&output=json`
  )
    .then((res) => {
      hideLoading();
      return res.json();
    })
    .then(cleanData)
    .then(insertContent)
    .then(routing)
    .catch((err) => {
      console.log(err);
    });
};

export { fetchData };
