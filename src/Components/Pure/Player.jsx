import { useState } from "react";
import Button from "./Button";
import xXx from "../../assets/x-letter.svg";
import oOo from "../../assets/OO.svg";

export default function Player({ inicialName, symbol, isActive, activePlayer, ...props}) {
    const [playerName, setPlayerName] = useState(inicialName);
    const [isEditing, setIsEditing] = useState(false);
    let inp = <input className="h-10 border-4 border-black bg-orange-300 rounded" type="text" required value={playerName} onChange={handleChange} />;
    let player = isEditing ? inp : playerName;
    let buttonLabel =isEditing ? 'Save' : 'Edit';
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    const active = "border-solid border-3 text-red rounded border-red-600";
    const inActive = "align-middle";

    return (
        <div {...props} className="flex space-x-8 align-middle  w-2/4 bg-amber-400 ">
            <span className="flex space-x-8 "  >
                <div className={isActive ? active : inActive}>{player}</div>
                <div>{symbol === 'X' ? <img className="w-10" src={xXx} alt="Icon" /> : <img className="w-10" src={oOo} alt="Icon" />}</div>
            </span>
            <Button onClick={() => setIsEditing((editting) => !editting)} >{buttonLabel}</Button>
        </div>
    );
}