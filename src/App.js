
import GameBoard from './Components/Pure/GameBoard.jsx';
import Header from './Components/Pure/Header.jsx'
import { useState } from 'react';
import Log from './Components/Pure/log.jsx';
import {WINNING_COMBINATIONS} from './Components/Pure/WINNING_COMBINATIONS.jsx'
import GameOver from './Components/Pure/GameOver.jsx';

let inicialGameBoard = [
  [
      null, null, null
  ],
  [
      null, null, null
  ],
  [
      null, null, null
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

  let winner;

  const gameBoard = [...inicialGameBoard.map(array => [...array])];
    for(const turn of gameTurns){
        let {square, player} = turn;
        const {row, col} = square;
        
        gameBoard[row][col] = player;    
    }

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =  gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol===thirdSquareSymbol){
        winner = firstSquareSymbol;
    }
  }
 
  const hasDraw = gameTurns.length === 9 && !winner;

  function reStart(){
    setGameTurns([]);
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
  <div className="text-center static">
    <Header activePlayer={activePlayer} />
    {(winner || hasDraw) && <GameOver winner={winner} onRestart={reStart}/>}
    <GameBoard handleSquareSymbol={handleSquareSymbol} board={gameBoard} />
    <Log turns={gameTurns} />
  </div>
);
}

export default App;