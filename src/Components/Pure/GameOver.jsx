import Button from "./Button";

export default function GameOver({winner, onRestart}){
    return <div className="rounded fixed top-20 left-0 right-0 p-12 text-white text-center w-md bg-neutral-800 border-solid border-2 border-amber-500">
      <p className="m-12">Game Over!</p>
      {winner && <p className="m-12 font-bold">{winner} won!</p>}
      {!winner && <p className="m-12 font-bold">It's a draw!</p>}
      <p className="m-12"><Button onClick={onRestart}>Restart</Button></p>
    </div>
}