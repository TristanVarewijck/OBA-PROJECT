const movieContainer = document.getElementById("movieContainer");

const insertContent = (resultDetails) => {
  resultDetails.forEach((detail) => {
    const movieTemplate = `
        <a href=#movie/${detail.id}>
        <div style="background-image: url(${detail.coverimages[0]})
        <div>
          <h2>${detail.title}</h2>
          <small>${detail.year}</small>
        <div>
        <p>${detail.summary}</p>
        </a>
        `;

    const movieBanner = document.createElement("li");
    movieBanner.innerHTML = movieTemplate;
    movieContainer.appendChild(movieBanner);
  });
};

export { insertContent };
