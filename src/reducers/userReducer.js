import "whatwg-fetch";
import { GET_USERS, EDIT_USER, REGISTER, USER_PAGE } from "../actions/UserAction";
import { LOGIN } from '../actions/UserAction';

const initialState = {
  userId: '',
  users: [],
  user: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      console.log('LOGIN REDUCER', action.payload.user)
      
      localStorage.setItem('id', action.payload.user);
      return { ...state, userId: action.payload.user };

    case USER_PAGE:
    console.log('USER_PAGE', action.payload.user)
    return {...state, user:action.payload.user}
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