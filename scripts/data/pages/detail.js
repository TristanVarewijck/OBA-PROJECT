const detailContainer = document.getElementById("detailContainer");

const insertDetailInformation = (results, id) => {
  while (detailContainer.firstChild) {
    detailContainer.removeChild(detailContainer.firstChild);
  }
  let movie = results.filter((result) => result.id === id);

  movie.forEach((item) => {
    const detail = `
    <h1>${item.title}</h1>

    <figure><img src=${item.img}><figure>
    <figcaption><figcaption
    `;

    const detailSection = document.createElement("section");
    detailSection.innerHTML = detail;
    detailContainer.appendChild(detailSection);
  });
};

export { insertDetailInformation };
