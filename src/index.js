import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const boardHosts = [{ host: '10.0.0.122', port: 13682 }, { host: '10.0.0.60', port: 22291 }, { host: '10.0.0.197', port: 13681 }, { host: '10.0.0.62', port: 22261 }];

ReactDOM.render(
  <React.StrictMode>
    <App boardHosts={boardHosts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
