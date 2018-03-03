import "whatwg-fetch";

export const GET_ITEM = "GET_ITEM";

const ITEMS_DATA = "/api/items";

export const getItems = () => {
  return dispatch => {
    return fetch(ITEMS_DATA)
      .then(result => {
        console.log("getFunction Working");
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

export const addItem = (item)=>{
console.log('sfsfsf',item)



}
