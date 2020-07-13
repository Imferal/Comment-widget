import React from 'react';

import Comments from './../Comments/Comments';
import CommentNew from './../CommentNew/CommentNew';

export default function CommentsList (props) {
  // Скрываем заголовок, если нет добавленных комментариев
  let showUserComments = props.state.commentsData.length === 0 ? 'hidden' : '';

  return (
    <section className="CommentsList">
      <h2 className={showUserComments}>User comments</h2>
      <Comments state={props.state} deleteComment={props.deleteComment} />
      <CommentNew addComment={props.addComment} />
    </section>
  );
}
