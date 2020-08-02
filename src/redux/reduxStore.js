import reducerComments from './reducerComments';
const {createStore} = require ('redux');
const initialState = {
  commentsNew: {
    editableCommentAuthor: '',
    editableCommentText: '',
  },
  comments: {
    commentsData: [],
  },
};

let store = createStore (reducerComments, initialState);
export default store;
