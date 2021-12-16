// REACT IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// REDUX IMPORTS
import { store } from './redux/store';
import { Provider } from 'react-redux';
// SERVICE WORKER
import * as serviceWorker from './serviceWorker';
// APP COMPONENT
import App from './App';
// CSS & BOOTSTRAP IMPORT
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
