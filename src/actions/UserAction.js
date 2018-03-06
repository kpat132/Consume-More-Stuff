import "whatwg-fetch";

export const GET_USERS = "GET_USERS"
export const EDIT_USER = "EDIT_USER"

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

export const registerUser = (user) => {
  return dispatch => {
    return fetch(`${DATA}/register`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(
        user
      )
    }).then(result => {
      console.log('riri', result)
      // do i need to do an if statement ehre? 
      return // login page reducers shit
    }) //probably should send them back to register page if it didn't work
    .catch(err => {
      console.log(err)
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
    }).catch(err =>{
      console.log(err)
    })
  }
}

export const loginUser = (user) => {
  return dispatch => {
    return fetch(`${DATA}/login`, {
      credentials : 'include',
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(
        user
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



// export const editUser = (user) => {
//   return dispatch => {
//     let data = {
//       username: user.username,
//       email: user.email,
//       password: user.password
//     }

//     return fetch(`${DATA}/${user.id}`,{
//       method: `PUT`,
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(result => {
//         dispatch({
//           type: EDIT_USER,
//           user: result
//         })
//       })
//       .catch(err => {
//         return console.log({ err: err.message });
//       })
//   }
// }


function checkStatus(response) {
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