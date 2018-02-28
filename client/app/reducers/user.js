function userState(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('_ling', action.payload.token)
      return Object.assign({}, state, { userData: action.payload.user, token: action.payload.token });

    case 'LOGIN_FAIL':
      return Object.assign({}, state, { error: action.payload.error });

    default:
      return state;
  }
}
export default userState;