import { SET_USERS, SET_TWEETS } from '../actions/actions'

const initialState = {
  users: [],
  user: {
    userName: '',
    displayName: '',
    userId: '',
    googleId: ''
  },
  tweets: []
}

export default function reducer (previousState = initialState, action) {
  switch (action.type) {
    case SET_USERS: {
      return Object.assign({}, previousState, {
        users: action.users
      })
    }
    case SET_TWEETS: {
      return Object.assign({}, previousState, {
        tweets: action.tweets
      })
    }
    default: return previousState
  }
}
