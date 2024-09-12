export function generateHelpTable(movesList) {
  const totalMoves = movesList.length;
  let table = "+-------------+";
  const padding = 8;

  for (const move of movesList) {
    table += ` ${move.padEnd(padding, " ")} +`;
  }
  table += "\n";

  for (let i = 0; i < totalMoves; i++) {
    table += `| ${movesList[i].padEnd(12, " ")} |`;

    for (let j = 0; j < totalMoves; j++) {
      const result = i === j ? " Draw    " : determineWinner(movesList[i], movesList[j], movesList);
      table += ` ${result.padEnd(padding, " ")} |`;
    }
    table += "\n";
  }

  console.log(table);
}

