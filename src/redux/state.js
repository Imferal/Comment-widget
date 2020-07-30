const ADD_COMMENT = 'ADD-COMMENT';
const DELETE_COMMENT = 'DELETE-COMMENT';
const UPDATE_EDITABLE_COMMENT = 'UPDATE-EDITABLE-COMMENT';

let store = {
  _state: {
    editableCommentAuthor: '',
    editableCommentText: '',
  },
  _getLocalStorageData () {
    this._state = localStorage.getItem ('savedComments') // Создаём пустой state или загружаем, если были данные в localStorage
      ? JSON.parse (localStorage.getItem ('savedComments'))
      : [];
  },
  _callSubscriber () {
    console.log ('callSubscriber...'); // Заглушка для обсервера
  },
  getState () {
    return this._state;
  },
  setState (localData) {
    this._state.savedComments = {localData};
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {
    if (action.type === ADD_COMMENT) {
      let commentDate = new Date () + ''; // Получаем текущую дату в строковом формате
      let newComment = {
        id: 9999,
        author: this._state.editableCommentAuthor,
        dateTime: commentDate,
        text: this._state.editableCommentText,
      };
      this._state.commentsData.push (newComment);
      // debugger;
      this._state.editableCommentText = '';
      localStorage.setItem ('savedComments', JSON.stringify (this._state));
      this._callSubscriber (this._state);
    } else if (action.type === DELETE_COMMENT) {
      this._state.commentsData.splice (action.key, 1);
      localStorage.setItem ('savedComments', JSON.stringify (this._state));
      this._callSubscriber (this._state);
    } else if (action.type === UPDATE_EDITABLE_COMMENT) {
      this._state.editableCommentAuthor = action.author;
      this._state.editableCommentText = action.text;
      this._callSubscriber (this._state);
    } else {
      console.log ('action не найден');
    }
  },
};

store._state = localStorage.getItem ('savedComments') // Создаём пустой state или загружаем, если были данные в localStorage
  ? JSON.parse (localStorage.getItem ('savedComments'))
  : [];

export const deleteCommentActionCreator = key => ({type: DELETE_COMMENT, key});

export const addCommentActionCreator = () => ({type: ADD_COMMENT});

export const updateEditableCommentActionCreator = (
  newCommentAuthor,
  newCommentText
) => ({
  type: UPDATE_EDITABLE_COMMENT,
  author: newCommentAuthor.current.value, // Забираем  значение текстового поля
  text: newCommentText.current.value, // Забираем  значение текстового поля
});

export default store;
