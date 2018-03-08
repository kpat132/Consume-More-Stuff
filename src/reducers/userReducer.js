import "whatwg-fetch";
import { GET_USERS, EDIT_USER, REGISTER, USER_PAGE } from "../actions/UserAction";
import { LOGIN, LOGOUT } from '../actions/UserAction';

const initialState = {
  userId: '',
  users: [],
  user: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('id', action.payload.user);
      return { ...state, userId: action.payload.user };
    case USER_PAGE:
      return { ...state, user:  action.payload.user }
    case REGISTER:
      return { ...state, users: action.users }
    case GET_USERS:
      return { ...state, users: action.users };
    case LOGOUT:
    localStorage.clear();
    return { ...state, user: null }
    case EDIT_USER:
       return { ...state, users: action.user };
    default:
      return state;
  }
}