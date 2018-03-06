import "whatwg-fetch";
import { GET_USERS, EDIT_USER, REGISTER } from "../actions/UserAction";
import { LOGIN } from '../actions/loginAction';

const initialState = {
  users: [],
  user: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('id', action.id);
      return { ...state, user: action.username };

    case REGISTER:

      return { ...state, users: action.users }

    case GET_USERS:
      return { ...state, users: action.users };
    // case EDIT_USER:
    //    console.log(`second case`);
    //    return { ...state, users: action.user };
    default:
      return state;
  }
}