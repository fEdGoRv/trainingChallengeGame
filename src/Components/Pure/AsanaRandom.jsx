import React, { useState } from 'react'
import Button from './Button';
import PropTypes from 'prop-types'

const AsanaRandom = props => {
    const [serie, setSerie] = useState(0);
    const train = (props) =>{
        setSerie( serie +1 ); 
    }

  return (
    <div className={props.className}>
    <h1 >Asana {props.name}</h1>
    <h2>Numero de serie {serie}</h2> 
    <Button onClick={train} className="">Count</Button>
    </div>
  )
}

AsanaRandom.propTypes = {
   name: PropTypes.string,
   className: PropTypes.string
}

export default AsanaRandom
