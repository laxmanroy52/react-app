/*
* Title: Background Color changing project
* Description: Click each color to change background imidietly
* Author: Laxman
* Date : 23-09-23
*/

// Dependencies
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App.jsx';

// Select elemwnt and create virtual dom
const rootElememt = document.getElementById('root');
const root = ReactDom.createRoot(rootElememt);

//Render the jsx
root.render(
      <App />
  );