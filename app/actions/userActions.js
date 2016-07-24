export function fetchUser() {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: {
      name: 'Sebastian Ekström',
      age: 26,
    }
  }
}
