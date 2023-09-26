/*
* Title: This is main component
* Description: All work is in component
* Author : Laxman
* Date : 24-09-23
*/
// Dependencies
import React, { useState } from 'react';
import Color from './Color.jsx';
import '../stylesheets/style.css'

// Declare App component
const App = () => {
  const colorName = ['red', 'green', 'blue'];
  const [color, setColor] = useState('green');
  
  return (
    <div id="container" style={{backgroundColor: color}}>
        
           {
              colorName.map(myColor => (
                 <Color 
                    onClick={() => setColor(myColor)} 
                    key={myColor} name={myColor} />
                 ))
         }
      
 </div>
);
}

//Export the App component
export default App;