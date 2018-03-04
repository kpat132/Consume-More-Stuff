import "whatwg-fetch";

export const GET_ITEM = "GET_ITEM";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_STATUS = 'GET_STATUS';
export const ADD_ITEM = 'ADD_ITEM';

const ITEMS_DATA = "/api/items";
const CATEGORIES_DATA = "/api/categories";
const STATUS_DATA = '/api/itemstatus';

export const getItems = () => {
  return dispatch => {
    return fetch(ITEMS_DATA)
      .then(result => {
      
        return result.json();
      })
      .then(json => {
        dispatch({
          type: GET_ITEM,
          items: json
        });
      })
      .catch(err => {
        return err;
      });
  };
};
export const getCategories = () => {
  return dispatch => {
    return fetch(CATEGORIES_DATA)
      .then(result => {
     
        return result.json();
      })
      .then(json => {
       
        dispatch({
          type: GET_CATEGORIES,
          payload: json
        });
      })
      .catch(err => {
        return err;
      });
  };
};
export const getStatus = () => {
  return dispatch => {
    return fetch(STATUS_DATA)
      .then(result => {
     
        return result.json();
      })
      .then(json => {
      
        dispatch({
          type: GET_STATUS,
          payload: json
        });
      })
      .catch(err => {
        return err;
      });
  };
};

export const addItem = (item)=>{
console.log('sfsfsf',item)
return dispatch =>{
  return fetch(ITEMS_DATA,{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(item)
  })
  .then(result=>{
    console.log('posting');
  })
}



}
