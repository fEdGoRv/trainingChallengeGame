
import Button from './Button';
import xXx from '../../assets/x-letter.svg'
import oOo from '../../assets/OO.svg'

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

      

    const gameBoard = inicialGameBoard;
    for(const turn of turns){
        let {square, player} = turn;
        const {row, col} = square;
        
        gameBoard[row][col] = player;
        if(player==='X'){
            player=<img className="w-16" src={xXx} alt="Icon"/>
        }else{
            player=<img className="w-16" src={oOo} alt="Icon"/>
        }
            
    }
    /*const [gameBoard, setGameboard] = useState(inicialGameBoard);

    function handleSelectedSquare(rowIndex, colIndex) {
        if(selectedPlayer==='X'){
            selectedPlayer=<img className="w-16" src={xXx} alt="Icon"/>
        }else{
            selectedPlayer=<img className="w-16" src={oOo} alt="Icon"/>
        }
        setGameboard((prevGameBoard) => {
            const upDateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            upDateBoard[rowIndex][colIndex] = selectedPlayer; 
            return upDateBoard;
        })
        handleSquareSymbol();
    }*/


    return <ol className='flex w-max-2xl border-solid border-4 border-red-500 mx-12 my-12 px-8 rounded-md bg-neutral-800 shadow-neutral-50 relative'>
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><Button className="bg-amber-500 text-white px-10 py-10 rounded text-xl text-center cursor-pointer font-bold item-center m-14 border-solid border-2" onClick={() => handleSquareSymbol(rowIndex, colIndex)}>{playerSymbol}</Button>;
                </li>)}
            </ol>
        </li>)}
    </ol>


}