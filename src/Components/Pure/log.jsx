export default function Log({turns}){
    return <ol>
        {turns.map((turn) => (<li key={`${turn.square.row}${turn.square.col}`}>
          Selected  {turn.player}:{turn.square.row},{turn.square.col}
        </li>))}
    </ol>
}