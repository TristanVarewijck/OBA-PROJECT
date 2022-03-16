const movieContainer = document.getElementById("movieContainer");

const insertContent = (cleanedData) => {
  let results = cleanedData;
  cleanedData.forEach((detail) => {
    const movieTemplate = `
        <a href=#movie/${detail.id}>
        <div>
          <h2>${detail.title ? detail.title : "-"}</h2>
          <small>${detail.year ? detail.year : "-"}</small>
        </div>
        <img src=${detail.img ? detail.img : "../assets/images/default.png"}>
        <p>${detail.summary ? detail.summary : "-"}</p>
        </a>
        `;

    const movieBanner = document.createElement("li");
    movieBanner.innerHTML = movieTemplate;
    movieContainer.appendChild(movieBanner);
  });

  return results;
};

export { insertContent };
