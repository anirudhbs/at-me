import { HELLO_WORLD } from '../actions/actions'

const initialState = {
  helloWorld: 'not yet'
}

export default function reducer (previousState = initialState, action) {
  switch (action.type) {
    case HELLO_WORLD: {
      return Object.assign({}, previousState, {
        helloWorld: action.value
      })
    }
    default: return previousState
  }
}
