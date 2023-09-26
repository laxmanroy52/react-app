import React, { useState } from 'react';
// import '../stylesheets/style.css';

// Declare App component
const Apps = () => {
  const colorName = ['red', 'green', 'blue'];
  const [color, setColor] = useState('green');

  return (
    <div id="container" style={{ backgroundColor: color }}>
      {colorName.map(myColor => (
        <Color
          onClick={() => setColor(myColor)}
          key={myColor}
          name={myColor}
          style={{ backgroundColor: myColor }} // Set the background color style here
        />
      ))}
    </div>
  );
};

// Color component
const Color = ({ name, onClick, style }) => {
  return (
    <>
      <button style={style} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Apps;