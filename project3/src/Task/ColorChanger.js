import React, { useState } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.3s' }}>
      <h1>Background Color Changer</h1>
      <div class='d-inline-flex gap-1'>
        <button type='button' class="btn" style={{ background:'grey',color:'violet'}} onClick={() => handleColorChange('violet')}>Violet</button>
        <button  type='button' class="btn"style={{background:'grey',color:'indigo'}} onClick={() => handleColorChange('indigo')}>Indigo</button>
        <button  type='button' class="btn" style={{background:'grey',color:'blue'}} onClick={() => handleColorChange('blue')}>Blue</button>
        <button  type='button' class="btn" style={{background:'grey',color:'green'}} onClick={() => handleColorChange('green')}>Green</button>
        <button type='button' class="btn" style={{background:'grey',color:'orange'}} onClick={() => handleColorChange('orange')}>Orange</button>
        <button type='button' class="btn" style={{background:'grey',color:'red'}} onClick={() => handleColorChange('red')}>Red</button>
        <button type='button' class="btn" style={{background:'grey',color:'yellow'}} onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button type='button' class="btn" style={{background:'grey',color:'white'}} onClick={() => handleColorChange('white')}>Original</button>
      </div>
    </div>
  );
};

export default ColorChanger;
