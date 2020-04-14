import React, { useState } from 'react';
import {ChromePicker} from 'react-color';

function ColorPicker() {
  const [color, setColor]= useState('#fff')
  const [showColorPicker, setShowColorPicker]= useState(true)
  return (
    <div>
      <h1>Color picker</h1>
      <h2 style={{color: color}}>You picked {color}</h2>
      {
        showColorPicker && <ChromePicker color={color} onChange={(eColor) => setColor(eColor.hex)}/>
      }
      <button onClick={() => setShowColorPicker(!showColorPicker)}>Close color picked</button>
    </div>
  )
}

export default ColorPicker