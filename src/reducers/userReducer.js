import "whatwg-fetch";
import { GET_USERS, EDIT_USER } from "../actions/UserAction";

const initialState = {
  users: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      console.log('USERS REDUCER');
      console.log('ACTION.USERS', action.users);
      return { ...state, users: action.users };
    // case EDIT_USER:
    //    console.log(`second case`);
    //    return { ...state, users: action.user };
    default:
      return state;
  }
}