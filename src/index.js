import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyles} from "./global-styles.js";
import 'normalize.css';
import { app } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FirebaseContext.Provider value={{app}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
    </>
);
