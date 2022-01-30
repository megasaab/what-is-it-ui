import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/store';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const store = new Store();

export const Context = createContext({
  store,
});

ReactDOM.render(
  <Context.Provider value={{ store }}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);