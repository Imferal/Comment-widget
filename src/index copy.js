import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import state, {
  subscribe,
  deleteComment,
  addComment,
  updateEditableComment,
} from './redux/state';
import App from './components/App/App';

let rerender = state => {
  ReactDOM.render (
    <React.StrictMode>
      <App
        state={state}
        addComment={addComment}
        deleteComment={deleteComment}
        updateEditableComment={updateEditableComment}
      />
    </React.StrictMode>,
    document.getElementById ('root')
  );
};

rerender (state);

// Отдаём наш rerender в state
subscribe (rerender);

// Работа в офлайн
serviceWorker.register (state);
