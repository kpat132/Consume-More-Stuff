import "whatwg-fetch";

import { GET_ITEM, GET_CATEGORIES, GET_STATUS, ADD_ITEM, GET_CONDITIONS, SET_ITEM, SET_CATEGORY } from "../actions/ItemsAction";


const initialState = {
  nextId: 4,
  items: [],
  categories:[],
  status:[],
  conditions:[],
  item:[],
  category: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ITEM:
    
      return { ...state, items: action.items };
    case GET_CATEGORIES:

      return {...state, categories:action.payload};
      case GET_CONDITIONS:
       return {...state, conditions:action.payload} ;
      case ADD_ITEM:
      return {...state, status:action.payload}
      case GET_STATUS:
      return {...state, status:action.payload}
     case SET_ITEM:
     return {...state,
      item: action.payload }
      case SET_CATEGORY:
      return {...state,
      category:action.payload}
      default:
      return state;
    }
    console.log(this.state)
};

