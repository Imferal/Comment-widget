import React from 'react';
import styles from './Comments.module.scss';
import {deleteCommentActionCreator} from '../../redux/reducerComments';

export default function Comments (props) {
  let publishedComments = props.state.comments.commentsData.map (
    (comment, i) => (
      <li key={i} id="{comment.id}">
        <article className={styles.comment}>

          <div className={styles.author}>{comment.author}</div>

          <div className={styles.text}>{comment.text}</div>

          <div className={styles.dateTime}>{comment.dateTime}</div>

        </article>
        <div className={styles.btn_container}>
          <button
            key={i}
            className={styles.delete}
            onClick={e => deleteOldComment (i)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  );

  const deleteOldComment = key => {
    props.dispatch (deleteCommentActionCreator (key));
  };

  return (
    <ul>
      {publishedComments}
    </ul>
  );
}
