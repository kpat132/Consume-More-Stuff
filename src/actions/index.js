import "whatwg-fetch";

export const GET_ITEM = "GET_ITEM";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_STATUS = "GET_STATUS";
export const GET_CONDITIONS = "GET_CONDITIONS";
export const ADD_ITEM = "ADD_ITEM";
export const SET_ITEM = "SET_ITEM";
export const SET_CATEGORY = 'SET_CATEGORY';

const ITEMS_DATA = "/api/items";
const CATEGORIES_DATA = "/api/categories";
const STATUS_DATA = "/api/itemstatus";
const CONDITIONS_DATA = "/api/conditions";

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
export const getConditions = () => {
  return dispatch => {
    return fetch(CONDITIONS_DATA)
      .then(result => {
        return result.json();
      })
      .then(json => {
        dispatch({
          type: GET_CONDITIONS,
          payload: json
        });
      })
      .catch(err => {
        return err;
      });
  };
};

export const setItem = id => {
  console.log("id", id);
  return dispatch => {
    return fetch(`${ITEMS_DATA}/${id}`)
      .then(item => {
        return item.json();
      })
      .then(json => {
        dispatch({
          type: SET_ITEM,
          payload: json
        });
      });
  };
};

export const setCategory = id =>{
  console.log(`${CATEGORIES_DATA}/${id}`);
  return dispatch => {
    return fetch(`${CATEGORIES_DATA}/${id}`)
    .then(cat=>{
      console.log('caat',cat)
      return cat.json()
    })
    .then(json=>{
      console.log('catID',json)
      dispatch({
        type:SET_CATEGORY,
        payload:json
      });
    });
  }
}

export const addItem = item => {
  console.log(item);
  return dispatch => {
    return fetch(ITEMS_DATA, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(result => {
        console.log(result);
        return result.json();
      })
      .then(result => {
        return dispatch(getItems());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editItem = item => {
  let id = item.user_id;
  let newItem = {
    price: item.price,
    name: item.name,
    description: item.description,
    make: item.make,
    model: item.model,
    dimensions: item.dimensions,
    image: item.image,
    notes: item.notes
  };

  return dispatch => {
    return fetch(`${ITEMS_DATA}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }).then(update => {
      console.log("updated", update);
    });
  };
};
