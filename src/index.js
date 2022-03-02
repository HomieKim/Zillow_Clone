import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Global} from "@emotion/react"
import { GlobalStyles } from './index.style';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global styles={GlobalStyles} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
