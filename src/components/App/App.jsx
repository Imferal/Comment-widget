import React from 'react';

import Header from '../Header/Header';
import CommentsList from '../CommentsList/CommentsList';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

const App = props => {
  return (
    <div className={styles.comments}>

      <Header />
      <CommentsList
        state={props.state}
        addComment={props.addComment}
        deleteComment={props.deleteComment}
      />
      <Footer />

    </div>
  );
};

export default App;
