const loader = document.querySelector("body > section:first-of-type");
function displayLoading() {
  loader.classList.add("display");
}

function hideLoading() {
  loader.classList.remove("display");
}

export { displayLoading, hideLoading };
