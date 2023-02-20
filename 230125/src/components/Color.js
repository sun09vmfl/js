import React, { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

function Color() {
  const { color, onOrange, onTeal, onSkyblue, onTomato } = useContext(ColorContext);
  return (
    <div>
      <h2 style={{ color: color }}>color: {color} </h2>
      <button onClick={() => onOrange()}>orange</button>
      <button onClick={() => onTeal()}>Teal</button>
      <button onClick={() => onSkyblue()}>Skyblue</button>
      <button onClick={() => onTomato()}>Tomato</button>
    </div>
  );
}

export default Color;
