import { insertDetailInformation } from "../data/pages/detail.js";

const mains = document.querySelectorAll("main");

const routing = (results) => {
  routie({
    "movie/:id": (id) => {
      insertDetailInformation(results, id);
      updateUI("detail");
    },
    " ": () => {
      updateUI("landing");
      console.log("landingpage");
    },
    error: () => {
      updateUI("error");
      console.log(error);
    },
  });
  function updateUI(route) {
    mains.forEach((main) => {
      main.classList.add("disabled");
    });
    let activeMain = document.querySelector(`[data-route=${route}]`);
    activeMain.classList.remove("disabled");
  }
};

export { routing };
