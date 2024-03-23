import AsanaRandom from './Components/Pure/AsanaRandom.jsx';
import GameBoard from './Components/Pure/GameBoard.jsx';
import Header from './Components/Pure/Header.jsx'
import { useState } from 'react';


function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);


  function handleSquareSymbol(rowIndex, colIndex) {
    setActivePlayer((curSelectedPlayer) => (curSelectedPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      }, ...prevTurns];
    return updatedTurns;
  });
}

return (
  <div className="App">
    <Header activePlayer={activePlayer} />
    <AsanaRandom className="text-center" name={"Chaturanga"} />
    <GameBoard handleSquareSymbol={handleSquareSymbol} turns={gameTurns} />
  </div>
);
}

export default App;
