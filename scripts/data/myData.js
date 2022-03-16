import { displayEmptyState, hideEmptyState } from "../states/empty.js";

const myData = (data) => {
  // debugger;
  let results = data.results;
  console.log(results.length);
  Object.keys(results).forEach((key) => {
    if (results[key] === undefined) {
      delete results[key];
    }
  });

  const resultDetails = results.map((result) => {
    //  Object.keys(result).forEach(key)

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
      if (key in result) {
        console.log("nice");
      } else {
        result[key] = ["-"];
      }
    });

    return {
      title: result.titles[0],
      summary: result.summaries[0],
      year: result.year,
      img: result.coverimages[1],
      id: result.id,
      authors: addSpaces(result.authors.toString()),
      genres: result.genres,
    };
  });
  // title = result.titles[0];
  // const summary = result.summaries[0];
  // const year = result.year;
  // const img = result.coverimages[1];
  // const id = result.id;
  // const authors = addSpaces(result.authors.toString());
  // console.log(authors);
  // const genres = result.genres;

  resultDetails.length <= 0 ? displayEmptyState() : hideEmptyState();

  console.log(resultDetails);
  return resultDetails;
};

// CLEANING
function addSpaces(authors) {
  console.log(authors);

  const authorsWithCommas = authors.replaceAll(",", ", ");

  //   return cleanDataObj.map((obj) => {
  //     obj.value = (Math.round(obj.value * 100) / 100).toString();
  return authorsWithCommas;
  //   });
}

export { myData };

// const cleanedDataResults = (myData) => {
//   let dataToClean = myData;
//   const cleanedData = dataToClean.map((item) => {
//     const title = addSpaces(item.title);

//     console.log(title);

//     return title;
//   });

//   return cleanedData;
// };

// export { cleanedDataResults };

// function addSpaces(title) {
//   const cleanedTitle = title.replace(" ", "kaas");

//   //   return cleanDataObj.map((obj) => {
//   //     obj.value = (Math.round(obj.value * 100) / 100).toString();
//   return cleanedTitle;
//   //   });
// }
