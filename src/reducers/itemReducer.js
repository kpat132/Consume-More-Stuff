import "whatwg-fetch";

import { GET_ITEM } from "../actions/index";
import {GET_CATEGORIES} from "../actions/index"
import {GET_STATUS} from "../actions/index";
import {ADD_ITEM} from '../actions/index';
import {GET_CONDITIONS} from '../actions/index'

const initialState = {
  nextId: 4,
  items: [],
  categories:[],
  status:[],
  conditions:[]
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
        console.log('in dispatch')
      return {...state, status:action.payload}
      case GET_STATUS:
      return {...state, status:action.payload}
      default:
      return state;
    }
};
