 
import Player from './Player'


function Header({activePlayer}) {
  
  return (
    <div className="flex text-2xl font-bold ">
      <Player key={0} inicialName="ElTon" symbol="X" activePlayer={activePlayer} isActive={ activePlayer === 'X'}/>
      <Player key={1} inicialName="Tito" symbol="O" activePlayer={activePlayer} isActive={ activePlayer === 'O'} />
    </div>
  )
  }

  export default Header;


