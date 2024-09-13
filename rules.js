export function determineWinner(playerMove, computerMove, moves) {
  const totalMoves = moves.length;
  const playerIndex = moves.indexOf(playerMove);
  const computerIndex = moves.indexOf(computerMove);

  if (playerIndex === computerIndex) {
    return `Draw!`;
  }

  const halfCircles = Math.floor(totalMoves / 2);
  if (
    (computerIndex > playerIndex &&
      computerIndex - playerIndex <= halfCircles) ||
    (computerIndex < playerIndex && playerIndex - computerIndex > halfCircles)
  ) {
    return `Yoe lose!`;
  } else {
    return `Yoe win!`;
  }
}
