import { createStore } from 'redux';

const SET_USERS = 'SET_USERS';
const SET_POSTS = 'SET_POSTS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_COMMENTS = 'SET_COMMENTS';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';


export const setUsers = users => ({ type: SET_USERS, users });
export const setPosts = posts => ({ type: SET_POSTS, posts });
export const setComments = comments => ({ type: SET_COMMENTS, comments });
export const setcurrentUserId = userId => ({ type: SET_CURRENT_USER, userId });

export const addTodo = title => ({ type: ADD_TODO, title });
export const toggleTodo = todoId => ({ type: TOGGLE_TODO, todoId });
export const deleteTodo = todoId => ({ type: DELETE_TODO, todoId });

const initialState = {
  users: [],
  posts: [],
  comments: [],
  currentUserId: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users };

    case SET_POSTS:
      return { ...state, posts: action.posts };

    case SET_COMMENTS:
      return { ...state, comments: action.comments };

    case SET_CURRENT_USER:
      return { ...state, currentUserId: action.userId };

    default: return state;
  }
};

const store = createStore(reducer, initialState);

export default store;