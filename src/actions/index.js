import "whatwg-fetch";

export const GET_ITEM = "GET_ITEM";

const FAKE_DATA = "https://jsonplaceholder.typicode.com/albums";

export const getItems = () => {
  return dispatch => {
    return fetch(FAKE_DATA)
      .then(result => {
        console.log("in function");
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
