
import Button from './Button';


export default function GameBoard({handleSquareSymbol, board}) {

        
    const orangeButton = "bg-amber-500 w-32 h-32 text-white rounded text-xl text-center cursor-pointer font-bold item-center m-12 border-solid border-2"  

    
    return <ol className='flex max-w-screen-2xl border-solid border-4 border-red-500 mx-12 my-12 rounded-md bg-neutral-800'>
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><Button className={orangeButton} player={playerSymbol} onClick={() => handleSquareSymbol(rowIndex, colIndex)}>{playerSymbol}</Button>;
                </li>)}
            </ol>
        </li>)}
    </ol>


}