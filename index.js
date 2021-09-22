
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

  function superbowlWin(array){
      for (const record of array){
      if ( record.result === "W"){
          return record.year
      }
      }

  }

  record.find(superbowlWin);