import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import json from './resume.json';

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);
