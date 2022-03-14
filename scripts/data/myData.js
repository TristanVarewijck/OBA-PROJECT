const myData = (data) => {
  let results = data.results;
  const resultDetails = results.map((result) => {
    const title = result.titles[0];
    const summary = result.summaries[0];
    const year = result.year;
    // const authors = result.author[0];
    const img = result.coverimages[0];
    const id = result.id;

    return { id, year, title, summary, img };
  });

  return resultDetails;
};

export { myData };
