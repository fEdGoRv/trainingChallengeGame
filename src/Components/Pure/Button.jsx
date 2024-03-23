import React from 'react'


const classN = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";



function Button({children,className,...props}) {
  return (
      <button className={!className? classN : className} {...props}><span>{children}</span></button>
    );
}

export default Button

