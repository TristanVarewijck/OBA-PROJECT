const detailContainer = document.getElementById("detailContainer");

const insertDetailInformation = (results, id) => {
  while (detailContainer.firstChild) {
    detailContainer.removeChild(detailContainer.firstChild);
  }
  let movie = results.filter((result) => result.id === id);

  movie.forEach((item) => {
    const detail = `
    <div>
    <div>
    <h1>${item.title}</h1>
    
    <img src=${item.img ? item.img : "../assets/images/default.png"}>
    </div>

    <div>
    <p><span>Year:</span> ${item.year}</p>
    <p><span>Authors:</span> ${item.authors}</p>
    <p><span>Genres:</span> ${item.genres}</p>
    </div>
    </div>
<div/>
    
    `;

    const detailSection = document.createElement("section");
    detailSection.innerHTML = detail;
    detailContainer.appendChild(detailSection);
  });
};

export { insertDetailInformation };
