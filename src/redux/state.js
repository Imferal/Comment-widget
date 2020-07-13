let rerender = () => {
  //
};

// Создаём пустой state или загружаем, если были данные в localStorage
let state = localStorage.getItem ('savedComments')
  ? JSON.parse (localStorage.getItem ('savedComments'))
  : {commentsData: []};

// Функция добавления нового комментария
export let addComment = newCommentData => {
  let newComment = {
    id: newCommentData.id,
    author: newCommentData.author,
    dateTime: newCommentData.date,
    text: newCommentData.text,
  };

  state.commentsData.push (newComment);

  rerender (state);

  localStorage.setItem ('savedComments', JSON.stringify (state));
};

// Фунция удаления комментария
export const deleteComment = key => {
  state.commentsData.splice (key, 1);

  rerender (state);

  localStorage.setItem ('savedComments', JSON.stringify (state));
};

// Наблюдение за изменениями
export const subscribe = observer => {
  rerender = observer;
};

export default state;
