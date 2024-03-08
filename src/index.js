import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);



