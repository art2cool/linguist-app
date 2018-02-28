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
      .then(response => {
        console.log('response')
        console.log(response)
          if (response.status === 200) {
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: {
                user: response.data.data.user,
                token: response.data.data.token
              }
            });

            dispatch({
              type: 'ROUTING',
              payload: {
                method: 'replace',
                nextUrl: '/'
              }
            });
          }
      })
      .catch( error => {
        dispatch({
          type: "LOGIN_FAIL",
          payload: {
            error: error.response.data.err
          }
        })
      })
  }
}