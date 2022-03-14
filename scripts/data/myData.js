const myData = (data) => {
  let results = data.results;

  console.log(results);
  const resultDetails = results.map((result) => {
    const title = result.titles[0];
    const summary = result.summaries[0];
    const year = result.year;
    const description = result.description[0];
    const authors = result.authors[0];
    const id = result.id;

    return { id, year, title, summary, description, authors };
  });

  return resultDetails;
};

export { myData };
