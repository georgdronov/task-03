export function determineWinner(playerMove, computerMove, moves) {
  const totalMoves = moves.length;
  const playerIndex = moves.indexOf(playerMove);
  const computerIndex = moves.indexOf(computerMove);

  if (playerIndex === computerIndex) {
    return `
     ____                       _       _                    _ 
    |  _ \ ___  _   _ _ __   __| |   __| |_ __ __ ___      _| |
    | |_) / _ \| | | | '_ \ / _` |  / _` | '__/ _` \ \ /\ / / |
    |  _ < (_) | |_| | | | | (_| | | (_| | | | (_| |\ V  V /|_|
    |_| \_\___/ \__,_|_| |_|\__,_|  \__,_|_|  \__,_| \_/\_/ (_)
    `;
  }

  const halfCircles = Math.floor(totalMoves / 2);
  if (
    (computerIndex > playerIndex && computerIndex - playerIndex <= halfCircles) ||
    (computerIndex < playerIndex && playerIndex - computerIndex > halfCircles)
  ) {
    return `
    __   __            _                _ 
    \ \ / /__  _   _  | | ___  ___  ___| |
     \ V / _ \| | | | | |/ _ \/ __|/ _ \ |
      | | (_) | |_| | | | (_) \__ \  __/_|
      |_|\___/ \__,_| |_|\___/|___/\___(_)
    `;
  } else {
    return `
    __   __                     _       _ 
    \ \ / /__  _   _  __      _(_)_ __ | |
     \ V / _ \| | | | \ \ /\ / / | '_ \| |
      | | (_) | |_| |  \ V  V /| | | | |_|
      |_|\___/ \__,_|   \_/\_/ |_|_| |_(_)
    `;
  }
}
