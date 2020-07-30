let rerender = () => {
  // console.log ('Rerender...');
};

// Создаём пустой state или загружаем, если были данные в localStorage
let state = localStorage.getItem ('savedComments')
  ? JSON.parse (localStorage.getItem ('savedComments'))
  : {commentsData: []};

state.editableCommentAuthor = '';
state.editableCommentText = '';

// Функция ввода данных нового комментария
export let updateEditableComment = (author, text) => {
  // debugger;
  state.editableCommentAuthor = author;
  state.editableCommentText = text;
  rerender (state);
};

// Функция добавления нового комментария
// export let addComment = newCommentData => {
export let addComment = () => {
  let commentDate = new Date () + ''; // Получаем текущую дату в строковом формате
  let newComment = {
    id: 9999,
    // author: newCommentData.author,
    author: state.editableCommentAuthor,
    dateTime: commentDate,
    text: state.editableCommentText,
  };

  state.commentsData.push (newComment);

  // Очищаем поле с комментарием (Имя по логике должно сохраняться)
  // state.editableCommentAuthor = '';
  state.editableCommentText = '';

  rerender (state);
  localStorage.setItem ('savedComments', JSON.stringify (state));
};

// Фунция удаления комментария
export const deleteComment = key => {
  state.commentsData.splice (key, 1);
  rerender (state);
  localStorage.setItem ('savedComments', JSON.stringify (state));
};

// Принимаем "нормальный" rerender из index.js и переназначаем заглушку,
// которая находится вверху этой страницы страницы. Это сделано, чтобы
// избежать циклической зависимости
export const subscribe = observer => {
  rerender = observer;
};

export default state;
