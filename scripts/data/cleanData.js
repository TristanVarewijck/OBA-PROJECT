import { displayEmptyState, hideEmptyState } from "../states/empty.js";

const cleanData = (data) => {
  let results = data.results;
  console.log(results);
  const cleanedData = results.map((result) => {
    const myKeys = [
      "summaries",
      "year",
      "titles",
      "authors",
      "id",
      "coverimages",
      "genres",
      "detailLink",
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
      link: result.detailLink,
    };
  });
  cleanedData.length <= 0 ? displayEmptyState() : hideEmptyState();

  return cleanedData;
};

// CLEANING
function addSpaces(authors) {
  const fixedSpacing = authors.replaceAll(",", ", ");
  return fixedSpacing;
}

export { cleanData };
