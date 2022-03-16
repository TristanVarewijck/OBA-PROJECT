import { displayEmptyState, hideEmptyState } from "../states/empty.js";

const myData = (data, query) => {
  console.log(data);
  let results = data.results;
  const resultDetails = results.map((result) => {
    const title = result.titles[0];
    const summary = result.summaries[0];
    const year = result.year;
    const img = result.coverimages[0];
    const id = result.id;

    return { id, year, title, summary, img };
  });

  console.log(query);
  resultDetails.length <= 0 ? displayEmptyState(query) : hideEmptyState();

  return resultDetails;
};

export { myData };
