import Table from "cli-table3";
import { determineWinner } from "./rules.js";

export function displayHelpTable(moves) {
  const headers = ["Your move \\ Opponent move", ...moves];

  const MIN_COLUMN_WIDTH = 6;

  const table = new Table({
    head: headers,
    colWidths: headers.map((header) =>
      Math.max(header.length + 2, MIN_COLUMN_WIDTH)
    ),
  });

  moves.forEach((move, rowIndex) => {
    const results = moves.map((_, colIndex) => {
      if (rowIndex === colIndex) return "Draw";
      return determineWinner(rowIndex, colIndex, moves) === "Win"
        ? "Win"
        : "Lose";
    });
    table.push([move, ...results]);
  });

  console.log("\nHelp: The table of who beats whom.");
  console.log(table.toString());
}
