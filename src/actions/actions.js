export const SET_USERS = 'SET_USERS'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_TWEETS = 'SET_TWEETS'

export function getUsers () {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/users/all', {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
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
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCookie('token', data.token)
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

export function setCookie (name, value) {
  document.cookie = `${name}=${value}`
}

export function getAccessToken () {
  return getCookie('token')
}

export function getCookie (name) {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop().split(';').shift()
}

export function getTweets () {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/tweets/all')
      .then(res => res.json())
      .then(data => {
        dispatch(setTweets(data))
      })
  }
}

export function setTweets (tweets) {
  return {
    type: SET_TWEETS,
    tweets
  }
}
