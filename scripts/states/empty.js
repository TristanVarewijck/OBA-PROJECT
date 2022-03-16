const empty = document.querySelector("body > section:nth-of-type(2)");

function displayEmptyState() {
  empty.classList.add("display");
}

function hideEmptyState() {
  empty.classList.remove("display");
}

export { displayEmptyState, hideEmptyState };
