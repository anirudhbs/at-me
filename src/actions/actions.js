export const SET_USERS = 'SET_USERS'
export const SET_USER_INFO = 'SET_USER_INFO'

export function getUsers () {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/users/all')
      .then(res => res.json())
      .then(data => {
        dispatch(setUsers(data))
      })
  }
}

export function setUsers (users) {
  return {
    type: SET_USERS,
    users
  }
}

export function signUpUser (userObject) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userObject)
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setUserInfo(data))
      })
  }
}

export function setUserInfo (userInfo) {
  return {
    type: SET_USER_INFO,
    userInfo
  }
}
