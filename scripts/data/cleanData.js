import { displayEmptyState, hideEmptyState } from "../states/empty.js";

const cleanData = (data) => {
  let results = data.results;
  const cleanedData = results.map((result) => {
    const myKeys = [
      "summaries",
      "year",
      "titles",
      "authors",
      "id",
      "coverimages",
      "genres",
    ];

    myKeys.forEach((key) => {
      key in result ? result[key] : (result[key] = ["-"]);
    });

    return {
      title: result.titles[0],
      summary: result.summaries[0],
      year: result.year,
      img: result.coverimages[1],
      id: result.id,
      authors: addSpaces(result.authors.toString()),
      genres: addSpaces(result.genres.toString()),
    };
  });

  cleanedData.length <= 0 ? displayEmptyState() : hideEmptyState();
  return cleanedData;
};

// CLEANING
function addSpaces(authors) {
  const authorsWithCommas = authors.replaceAll(",", ", ");
  return authorsWithCommas;
}

export { cleanData };
