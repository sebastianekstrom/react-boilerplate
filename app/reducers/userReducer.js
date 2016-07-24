const defaultState = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
  case 'FETCH_USER_FULFILLED':
    return {
      ...state,
      fetching: false,
      fetched: true,
      user: action.payload,
    }
  default:
    return state
  }
}
