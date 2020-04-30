// src/Project.js

import React from 'react'
import './POPOSSpace.css'

function POPOSSpace(props) {
    // this is the equivalent of defining props.name etc.
    const { name, image, address, hours } = props
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
        <h1>{name}</h1>
        <addr>{address}</addr>
        <h3 className="highlighter">{hours}</h3>
      </div>
    )
  }

export default POPOSSpace