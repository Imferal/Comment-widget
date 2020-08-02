const DELETE_COMMENT = 'DELETE-COMMENT';
const LOAD_COMMENTS = 'LOAD_COMMENTS';
const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_EDITABLE_COMMENT = 'UPDATE-EDITABLE-COMMENT';

const reducerComments = (state, action) => {
  switch (action.type) {
    case DELETE_COMMENT: {
      state.comments.commentsData.splice (action.key, 1);
      localStorage.setItem ('savedComments', JSON.stringify (state));
      return state;
    }

    case LOAD_COMMENTS: {
      localStorage.getItem ('savedComments')
        ? (state = JSON.parse (localStorage.getItem ('savedComments')))
        : (state.comments.commentsData = []);
      return state;
    }

    case ADD_COMMENT:
      let commentDate = new Date () + ''; // Получаем текущую дату в строковом формате
      let newComment = {
        id: 9999,
        author: state.commentsNew.editableCommentAuthor,
        dateTime: commentDate,
        text: state.commentsNew.editableCommentText,
      };
      state.comments.commentsData.push (newComment);
      state.commentsNew.editableCommentText = '';
      localStorage.setItem ('savedComments', JSON.stringify (state));
      return state;

    case UPDATE_EDITABLE_COMMENT:
      state.commentsNew.editableCommentAuthor = action.author;
      state.commentsNew.editableCommentText = action.text;
      return state;

    default:
      return state;
  }
};

export const deleteCommentActionCreator = key => ({type: DELETE_COMMENT, key});
export const loadCommentsActionCreator = () => ({type: LOAD_COMMENTS});
export const addCommentActionCreator = () => ({type: ADD_COMMENT});
export const updateEditableCommentActionCreator = (
  newCommentAuthor,
  newCommentText
) => ({
  type: UPDATE_EDITABLE_COMMENT,
  author: newCommentAuthor.current.value, // Забираем  значение текстового поля
  text: newCommentText.current.value, // Забираем  значение текстового поля
});

export default reducerComments;
