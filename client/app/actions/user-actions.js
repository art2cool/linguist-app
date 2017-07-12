import UserService from '../services/user';

export function logout() {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_SUCCESS"
    });
  }
}

export function signIn(payload) {
  return (dispatch) => {

    UserService.signIn(payload)
      .then(responce => {
          if (responce.status === 202) {
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: {
                user: response.data.user,
                token: response.data.token
              }
            });

            dispatch({
              type: ROUTING,
              payload: {
                method: 'replace',
                nextUrl: '/home'
              }
            });
          }
      })
      .catch( error => {
        dispatch({
          type: "LOGIN_FAIL",
          payload: {
            error: error.response.data
          }
        })
      })
  }
} 