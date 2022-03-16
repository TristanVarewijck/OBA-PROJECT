const cleanedDataResults = (myData) => {
  let dataToClean = myData;
  const cleanedData = dataToClean.map((item) => {
    const title = addSpaces(item.title);

    console.log(title);

    return title;
  });

  return cleanedData;
};

export { cleanedDataResults };

function addSpaces(title) {
  const cleanedTitle = title.replace(" ", "kaas");

  //   return cleanDataObj.map((obj) => {
  //     obj.value = (Math.round(obj.value * 100) / 100).toString();
  return cleanedTitle;
  //   });
}

// let cryptoData = res.data.prices;
//       // convert array to th object
//       let cleanDataObj = new Array();

//       cleanDataObj = cryptoData.map((item) => {
//         return {
//           date: item[0],
//           value: item[1],
//         };
//       });
//       // 1 cleandecimals
//       cleanDataObj = setDecimals(cleanDataObj);
//       // 2 convert to dates
//       cleanDataObj = setDates(cleanDataObj);

//       // logger
//       console.log(cleanDataObj);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// function setDecimals(cleanDataObj) {
//   return cleanDataObj.map((obj) => {
//     obj.value = (Math.round(obj.value * 100) / 100).toString();
//     return obj;
//   });
// }
