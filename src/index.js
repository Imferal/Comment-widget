import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';

import App from './components/App/App';
import {loadCommentsActionCreator} from './redux/reducerComments';
import store from './redux/reduxStore';

// Загружаем сохранённые комментарии
store.dispatch (loadCommentsActionCreator ());

let rerender = () => {
  // debugger;
  ReactDOM.render (
    <React.StrictMode>
      <App state={store.getState ()} dispatch={store.dispatch.bind (store)} />
    </React.StrictMode>,
    document.getElementById ('root')
  );
};

// Первично отрисовываем страницу
rerender (store.getState ());

// Отдаём наш rerender в state
store.subscribe (() => {
  let state = store.getState ();
  rerender (state);
});

// Работа в офлайн
serviceWorker.register (store);
