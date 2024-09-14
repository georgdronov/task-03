export function determineWinner(userMoveIndex, computerMoveIndex, moves) {
  const totalMoves = moves.length;
  const halfMoves = Math.floor(totalMoves / 2);

  if (userMoveIndex === computerMoveIndex) {
    return "Draw"; 
  }

  if (
    (userMoveIndex > computerMoveIndex &&
      userMoveIndex - computerMoveIndex <= halfMoves) ||
    (userMoveIndex < computerMoveIndex &&
      computerMoveIndex - userMoveIndex > halfMoves)
  ) {
    return "Win"; 
  }

  return "Lose"; 
}
