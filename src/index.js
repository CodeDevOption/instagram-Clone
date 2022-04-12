import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reducer, { initialState } from './Reducer';
import { StateProvider } from './StateProvider';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState ={initialState} reducer={Reducer} >
         <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
