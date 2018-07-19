export const SET_USERS = 'SET_USERS'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_TWEETS = 'SET_TWEETS'

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
  console.log('user', userObject)
  return (dispatch) => {
    return fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userObject)
    })
      .then(res => {
        console.log('first then')
        return res.json()
      })
      .then(data => {
        dispatch(setUserInfo(data))
      })
      .catch((err) => {
        console.log('Error while logging in', err) // todo: fix error
      })
  }
}

export function setUserInfo (userInfo) {
  return {
    type: SET_USER_INFO,
    userInfo
  }
}

export function postTweet (tweetObject) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/tweets/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(tweetObject)
    })
      .then(res => res.json())
      .then(data => {
      })
      .catch((err) => {
        console.log('Error while posting tweet', err) // todo: fix error
      })
  }  
}
