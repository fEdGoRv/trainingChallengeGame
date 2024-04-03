
import GameBoard from './Components/Pure/GameBoard.jsx';
import Header from './Components/Pure/Header.jsx'
import { useState } from 'react';
import Log from './Components/Pure/log.jsx';
import {WINNING_COMBINATIONS} from './Components/Pure/WINNING_COMBINATIONS.jsx'
import GameOver from './Components/Pure/GameOver.jsx';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

let INICIAL_GAME_BOARD = [
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

function deriveGameBoard(gameTurns){
  const gameBoard = [...INICIAL_GAME_BOARD.map(array => [...array])];
  for(const turn of gameTurns){
      let {square, player} = turn;
      const {row, col} = square;
      
      gameBoard[row][col] = player;    
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =  gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol===thirdSquareSymbol){
        winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
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

function handlePlayerNameChange(symbol, newName){
   setPlayers(prevPlayer => {
    return {
      ...prevPlayer,
      [symbol]:newName
    };
   })
}

return (
  <div className="text-center static">
    <Header onChangeName={handlePlayerNameChange} PLAYERS={PLAYERS} activePlayer={activePlayer} />
    {(winner || hasDraw) && <GameOver winner={winner} onRestart={reStart}/>}
    <GameBoard handleSquareSymbol={handleSquareSymbol} board={gameBoard} />
    <Log turns={gameTurns} />
  </div>
);
}

export default App;