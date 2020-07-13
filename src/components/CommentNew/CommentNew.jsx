import React from 'react';
import styles from './CommentNew.module.scss';
import {addComment} from '../../redux/state';

export default function CommentNew (props) {
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

      let commentDate = new Date () + ''; // Получаем текущую дату в строковом формате
      let newCommentData = {
        id: 5,
        date: commentDate, // Создаём дату коммента
        author: newCommentAuthor.current.value,
        text: newCommentText.current.value,
      };

      addComment (newCommentData); // Добавляем коммент в стейт

      // Обнуляем поля формы после отправки
      newCommentText.current.value = newCommentAuthor.current.value = '';
    }
  };

  return (
    <form className={styles.form}>
      <legend className={styles.legend}>Add new comment</legend>

      <label className={styles.label}>
        Your name:
        <input ref={newCommentAuthor} className={styles.author} type="text" />
      </label>
      <label className={styles.label}>
        Comment:
        <textarea
          ref={newCommentText}
          className={styles.text + ' ' + styles.text_indent}
          id=""
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
