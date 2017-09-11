import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { HashRouter, hashHistory } from 'react-router-dom';

// Render the main component into the dom
ReactDOM.render(<HashRouter history={hashHistory}>
  <App>

  </App>
</HashRouter>, document.getElementById('app'));
