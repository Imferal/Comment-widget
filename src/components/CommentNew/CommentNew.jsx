import React from 'react';
import styles from './CommentNew.module.scss';
import {
  updateEditableCommentActionCreator,
  addCommentActionCreator,
} from '../../redux/state';

export default function CommentNew (props) {
  // debugger;
  let newCommentText = React.createRef ();
  let newCommentAuthor = React.createRef ();

  // Функция добавления комментария
  const addNewComment = e => {
    e.preventDefault ();

    // Проверка полей на пустоту
    if (newCommentAuthor.current.value === '') {
      newCommentAuthor.current.className += ' ' + styles.error;
      if (newCommentText.current.value === '') {
        newCommentText.current.className += ' ' + styles.error;
      }
      return;
    } else if (newCommentText.current.value === '') {
      newCommentText.current.className += ' ' + styles.error;
      return;
    } else {
      newCommentAuthor.current.className = styles.author;
      newCommentText.current.className = styles.text + ' ' + styles.text_indent;

      // Если поля не пустые
      props.dispatch (addCommentActionCreator ()); // Добавляем коммент в стейт
    }
  };

  // Редактирование комментария
  const onCommentChange = () => {
    props.dispatch (
      updateEditableCommentActionCreator (newCommentAuthor, newCommentText)
    );
  };

  return (
    <form className={styles.form}>
      <legend className={styles.legend}>Add new comment</legend>

      <label className={styles.label}>
        Your name:
        <input
          ref={newCommentAuthor}
          onChange={onCommentChange}
          className={styles.author}
          type="text"
          value={props.state.editableCommentAuthor}
        />
      </label>
      <label className={styles.label}>
        Comment:
        <textarea
          ref={newCommentText}
          onChange={onCommentChange}
          className={styles.text + ' ' + styles.text_indent}
          id=""
          value={props.state.editableCommentText}
        />
      </label>
      <div className={styles.btn_container}>
        <input
          onClick={addNewComment} // Вызов функции добавления комментария
          className={styles.btn_sent}
          type="submit"
          value="Sent"
        />
      </div>
    </form>
  );
}
