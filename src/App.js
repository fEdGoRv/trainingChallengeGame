
import GameBoard from './Components/Pure/GameBoard.jsx';
import Header from './Components/Pure/Header.jsx'
import { useState } from 'react';
import Log from './Components/Pure/log.jsx';

let inicialGameBoard = [
  [
      'Click Me', 'Click Me', 'Click Me'
  ],
  [
      'Click Me', 'Click Me', 'Click Me'
  ],
  [
      'Click Me', 'Click Me', 'Click Me'
  ]
];


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = inicialGameBoard;
    for(const turn of gameTurns){
        let {square, player} = turn;
        const {row, col} = square;
        
        gameBoard[row][col] = player;    
    }

  function handleSquareSymbol(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer 
      }, ...prevTurns];
    return updatedTurns;
  });
}

return (
  <div className="App">
    <Header activePlayer={activePlayer} />
    <GameBoard handleSquareSymbol={handleSquareSymbol} board={gameBoard} />
    <Log turns={gameTurns} />
  </div>
);
}

export default App;