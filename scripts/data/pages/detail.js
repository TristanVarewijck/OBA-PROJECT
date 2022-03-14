const detailContainer = document.getElementById("detailContainer");

const insertDetailInformation = (id, movies) => {
  console.log("KAAS");
  console.log(id);
  console.log(movies);
  while (detailContainer.firstChild) {
    detailContainer.removeChild(detailContainer.firstChild);
  }

  let movieInfo = movies.filter((movie) =>
    `${movie.id}` === id ? console.log("good") : console.log("bad")
  );

  console.log(movie);
};

export { insertDetailInformation };
