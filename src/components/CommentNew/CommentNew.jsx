import React from 'react';
import styles from './CommentNew.module.scss';
import {
  updateEditableCommentActionCreator,
  addCommentActionCreator,
} from '../../redux/reducerComments';

export default function CommentNew (props) {
  let newCommentText = React.createRef ();
  let newCommentAuthor = React.createRef ();

  // Функция добавления комментария
  const addNewComment = e => {
    e.preventDefault ();
    // Проверка полей на пустоту
    const author = newCommentAuthor.current;
    const text = newCommentText.current;

    // Cбрасываем стили перед проверкой
    author.className = styles.author;
    text.className = styles.text + ' ' + styles.text_indent;
    // Если оба поля пустые
    if (author.value === '' && text.value === '') {
      author.className += ' ' + styles.error;
      text.className += ' ' + styles.error;
      // Если нет автора
    } else if (author.value === '') {
      author.className += ' ' + styles.error;
      // Если нет текста
    } else if (text.value === '') {
      text.className += ' ' + styles.error;
      // Если всё в порядке
    } else {
      props.dispatch (addCommentActionCreator ()); // Добавляем коммент в стейт
    }
  };

  // Редактирование комментария
  const onCommentChange = () => {
    // debugger;
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
          value={props.state.commentsNew.editableCommentAuthor}
        />
      </label>
      <label className={styles.label}>
        Comment:
        <textarea
          ref={newCommentText}
          onChange={onCommentChange}
          className={styles.text + ' ' + styles.text_indent}
          id=""
          value={props.state.commentsNew.editableCommentText}
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
