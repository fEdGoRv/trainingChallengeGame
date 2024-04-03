 
import Player from './Player'


function Header({activePlayer, onChangeName, PLAYERS}) {
  
  return (
    <div className="flex text-2xl font-bold ">
      <Player key={0} inicialName={PLAYERS.X} symbol="X" onChangeName={onChangeName} activePlayer={activePlayer} isActive={ activePlayer === 'X'}/>
      <Player key={1} inicialName={PLAYERS.O} symbol="O" onChangeName={onChangeName} activePlayer={activePlayer} isActive={ activePlayer === 'O'} />
    </div>
  )
  }

  export default Header;


