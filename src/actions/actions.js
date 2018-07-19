export const SET_USERS = 'SET_USERS'

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
