import "whatwg-fetch";

export const GET_USERS = "GET_USERS"
export const EDIT_USER = "EDIT_USER"
export const REGISTER = "REGISTER"

const DATA = "http://localhost:3000/api/users";

// export const getUsers = () => {
//   return dispatch => {
//     return fetch(DATA)
//       .then(result => {
//         return result.json();
//       })
//       .then(users => {
//         dispatch({
//           type: GET_USERS,
//           users: users
//         });
//       })
//       .catch(err => {
//         return console.log({ err: err.message });
//       })
//   }
// }


export const register = (user) => {
  console.log('REGISTER ACTION');
  return dispatch => {
   return fetch(`${DATA}/register`,{
    method: `POST`,
    headers: {
      'Content-Type' : 'application/json',
      
    },
    body: JSON.stringify(user)
   })
   .then(newUser =>{
    //  return dispatch({
    //    type:REGISTER,
    //    users:newUser
    //  })
    console.log('NEWUSER',newUser);
   })
   .catch(err => {
     console.log({err:err.message});
   })
  }
}

export const editUser = (user) => {
  return dispatch => {
    let data = {
      username: user.username,
      email: user.email,
      password: user.password
    }

    return fetch(`${DATA}/${user.id}`,{
      method: `PUT`,
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(result => {
        dispatch({
          type: EDIT_USER,
          user: result
        })
      })
      .catch(err => {
        return console.log({ err: err.message });
      })
  }
}
export const userPage = (id) => {
  
  return dispatch => {
    return fetch (`${DATA}/${id}`, {
         credentials : 'include' 
    }).then(checkStatus)
      .then(parseJSON)
      .then(verified => {
        ///send to dispatch so id saves to global storage
        console.log('verified',verified)
    }).catch(err =>{
      console.log(err)
    })
  }
}

export const loginAction = (user) => {
  return dispatch => {
    let data = {
      username: user.username,
      password: user.password
    }
    return fetch(`${DATA}/login`, {
      credentials : 'include',
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(
        data
      )
    }).then(checkStatus)
      .then(parseJSON)
      .then(verifiedUser =>{
        
      return userPage(verifiedUser.user)(dispatch)
    }).catch(err => {
      console.log(err)
    })
  }
}



function checkStatus(response) {
  console.log('inside checkStatus', response)
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}