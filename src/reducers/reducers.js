import { SET_USERS } from '../actions/actions'

const initialState = {
  users: [],
  user: {
    userName: '',
    displayName: '',
    userId: '',
    googleId: ''
  }
}

export default function reducer (previousState = initialState, action) {
  switch (action.type) {
    case SET_USERS: {
      return Object.assign({}, previousState, {
        users: action.users
      })
    }
    default: return previousState
  }
}
