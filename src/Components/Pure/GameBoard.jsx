
import Button from './Button';


export default function GameBoard({handleSquareSymbol, turns}) {

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

    const orangeButton = "bg-amber-500 text-white px-10 py-10 rounded text-xl text-center cursor-pointer font-bold item-center m-14 border-solid border-2"  

    const gameBoard = inicialGameBoard;
    for(const turn of turns){
        let {square, player} = turn;
        const {row, col} = square;
        
        gameBoard[row][col] = player;    
    }
    
    return <ol className='flex border-solid border-4 border-red-500 mx-12 my-12 rounded-md bg-neutral-800'>
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><Button className={orangeButton} player={playerSymbol} onClick={() => handleSquareSymbol(rowIndex, colIndex)}>{playerSymbol}</Button>;
                </li>)}
            </ol>
        </li>)}
    </ol>


}