import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

const App = props => {
  // debugger;
  return (
    <div className={styles.comments}>

      <Header />
      <Main state={props.state} dispatch={props.dispatch} />
      <Footer />

    </div>
  );
};

export default App;
