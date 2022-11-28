const s7sheetIdsByRound = {
  R1: "2088395389",
  R2: "1019163657",
  R3: "1988697103",
  R4: "61560417",
  R5: "2084357858",
  R6: "691175989",
};

const sheetIdsArray = Object.values(s7sheetIdsByRound);

const stripPlayerRoundOne = (sheetId, firstRow, collection = []) => {
  if (document.getElementById(`${sheetId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${sheetId}R${firstRow}`).parentElement;
    const rowCells = rowEl.querySelectorAll("td");
    let rowCellsArray = [];
    for (const cell of rowCells) {
      if (cell.textContent) rowCellsArray.push(cell.textContent);
    }

    if (rowCellsArray.length < 80) return;

    const easyScoresArray = rowCellsArray.splice(8, 18);
    const hardScoresArray = rowCellsArray.splice(8, 18);
    const easyHoleScoreNames = rowCellsArray.splice(19, 18);
    const hardHoleScoreNames = rowCellsArray.splice(18, 18);
    rowCellsArray.splice(rowCellsArray.length - 1, 1);

    const formattedRowObject = {
      easyRoundTotalStrokes: rowCellsArray[0],
      hardRoundTotalStrokes: rowCellsArray[1],
      roundRank: rowCellsArray[2],
      seasonPointsEarned: rowCellsArray[3],
      player: rowCellsArray[4],
      easyRoundScore: rowCellsArray[5],
      hardRoundScore: rowCellsArray[6],
      totalToPar: rowCellsArray[7],
      easyScorecard: easyScoresArray,
      hardScorecard: hardScoresArray,
      numPars: rowCellsArray[8],
      numBirdie: rowCellsArray[9],
      numEagle: rowCellsArray[10],
      numAblatross: rowCellsArray[11],
      numHoleInOne: rowCellsArray[12],
      numBogey: rowCellsArray[13],
      numDoubleBogey: rowCellsArray[14],
      numTripleBogey: rowCellsArray[15],
      numStrokeOut: rowCellsArray[16],
      easyScores: easyHoleScoreNames,
      hardScores: hardHoleScoreNames,
    };
    collection.push(formattedRowObject);
    stripPlayerRoundOne(sheetId, firstRow + 1, collection);
  }
  return collection;
};

const stripPlayerRounds = (sheetId, firstRow, collection = []) => {
  if (document.getElementById(`${sheetId}R${firstRow}`)) {
    const rowEl = document.getElementById(`${sheetId}R${firstRow}`).parentElement;
    const rowCells = rowEl.querySelectorAll("td");
    let rowCellsArray = [];
    for (const cell of rowCells) {
      if (cell.textContent) {
        rowCellsArray.push(cell.textContent.trim());
      }
    }

    if (rowCellsArray.length < 65) return;

    const easyScoresArray = rowCellsArray.splice(8, 18);
    const hardScoresArray = rowCellsArray.splice(8, 18);
    const easyHoleScoreNames = rowCellsArray.splice(19, 18);
    const hardHoleScoreNames = rowCellsArray.splice(19, 18);
    rowCellsArray.splice(rowCellsArray.length - 1, 1);

    const formattedRowObject = {
      easyRoundTotalStrokes: rowCellsArray[0],
      hardRoundTotalStrokes: rowCellsArray[1],
      roundRank: rowCellsArray[2],
      seasonPointsEarned: rowCellsArray[3],
      player: rowCellsArray[4],
      easyRoundScore: rowCellsArray[5],
      hardRoundScore: rowCellsArray[6],
      totalToPar: rowCellsArray[7],
      easyScorecard: easyScoresArray,
      hardScorecard: hardScoresArray,
      numPars: rowCellsArray[8],
      numBirdie: rowCellsArray[9],
      numEagle: rowCellsArray[10],
      numAblatross: rowCellsArray[11],
      numDoubleEagle: rowCellsArray[12],
      numHoleInOne: rowCellsArray[13],
      numBogey: rowCellsArray[14],
      numDoubleBogey: rowCellsArray[15],
      numTripleBogey: rowCellsArray[16],
      numStrokeOut: rowCellsArray[17],
      easyScores: easyHoleScoreNames,
      hardScores: hardHoleScoreNames,
    };
    collection.push(formattedRowObject);
    stripPlayerRounds(sheetId, firstRow + 1, collection);
  }
  return collection;
};

// console.log(stripPlayerRoundOne("2088395389", 3));
// console.log(stripPlayerRounds('1019163657', 3))
// console.log(stripPlayerRounds('1988697103', 3))
// console.log(stripPlayerRounds('61560417', 3))
// console.log(stripPlayerRounds('2084357858', 3))
// console.log(stripPlayerRounds('691175989', 3))

// fs.writeFile("wmgt-S7R1-round-stats", JSON.stringify(stripPlayerRoundOne("2088395389", 3)));
// fs.writeFile("wmgt-S7R2-round-stats", JSON.stringify(stripPlayerRoundOne("1019163657", 3)));
// fs.writeFile("wmgt-S7R3-round-stats", JSON.stringify(stripPlayerRoundOne("1988697103", 3)));
// fs.writeFile("wmgt-S7R4-round-stats", JSON.stringify(stripPlayerRoundOne("61560417", 3)));
// fs.writeFile("wmgt-S7R5-round-stats", JSON.stringify(stripPlayerRoundOne("2084357858", 3)));
// fs.writeFile("wmgt-S7R6-round-stats", JSON.stringify(stripPlayerRoundOne("691175989", 3)));
