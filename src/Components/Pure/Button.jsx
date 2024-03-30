import React from 'react'
import xXx from '../../assets/x-letter.svg';
import oOo from '../../assets/OO.svg';


const classN = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
const x = <img src={xXx} alt='icon'/>;
const o = <img src={oOo} alt='icon'/>;


function Button({children, className, player, ...props}) {
  
    let inicialsButtons = <button className={!className? classN : className} {...props}><span>{children}</span></button>;
    
    function handleButton(){
        if(player === 'X'){
          return <div className='bg-amber-500 w-28 m-12 rounded border-solid border-2 border-white p-4'>{x}</div>
        }else if(player === 'O'){
          return <div className='bg-amber-500 w-28 m-12 rounded border-solid border-2 border-white p-4'>{o}</div>
        }else {
          return inicialsButtons; 
        }
    }
    
    return player ? handleButton(): inicialsButtons;
  }
  

export default Button;

