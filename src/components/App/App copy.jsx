import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

// debugger;
const App = props => {
  return (
    <div className={styles.comments}>

      <Header />
      <Main
        state={props.state}
        addComment={props.addComment}
        deleteComment={props.deleteComment}
        updateEditableComment={props.updateEditableComment}
      />
      <Footer />

    </div>
  );
};

export default App;
