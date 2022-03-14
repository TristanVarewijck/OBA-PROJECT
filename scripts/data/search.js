import { fetchData } from "./fetch.js";

const form = document.getElementById("searchForm");
const input = document.querySelector("#searchForm input");

const searchTrigger = form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(input.value);
});

export { searchTrigger };
