import React from 'react';

import Comments from '../Comments/Comments';
import CommentNew from '../CommentNew/CommentNew';

export default function Main (props) {
  // Скрываем заголовок, если нет добавленных комментариев/
  // debugger;
  let showUserComments = props.state.comments.commentsData.length === 0
    ? 'hidden'
    : '';

  return (
    <section className="Main">
      <h2 className={showUserComments}>User comments</h2>
      <Comments state={props.state} dispatch={props.dispatch} />
      <CommentNew state={props.state} dispatch={props.dispatch} />
    </section>
  );
}
