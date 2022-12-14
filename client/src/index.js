import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './context/Context';


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider >
      <App />
    </ContextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
