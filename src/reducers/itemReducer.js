import 'whatwg-fetch';
import {GET_ITEM} from '../actions/index'







const initialState = {
  nextId:4,
  items: [
    
  ] 
  
}

export default(state = initialState, action = {})=>{
  switch(action.type){
    case GET_ITEM:
    console.log(action)
    console.log('in reducer')
    
    return {...state, items:action.items}

    default:
    return state;
  }
}