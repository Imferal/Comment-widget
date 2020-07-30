import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';

import store from './redux/state';
import App from './components/App/App';

let rerender = state => {
  ReactDOM.render (
    <React.StrictMode>
      <App state={store.getState ()} dispatch={store.dispatch.bind (store)} />
    </React.StrictMode>,
    document.getElementById ('root')
  );
};

rerender (store.getState ());

// Отдаём наш rerender в state
store.subscribe (rerender);

// Работа в офлайн
serviceWorker.register (store);
