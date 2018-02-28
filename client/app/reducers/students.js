function userState(state = {}, action) {
  switch (action.type) {
    case 'GET_STUDENTS_SUCCESS':
      return Object.assign({}, state, { students: action.payload.students });

    case 'GET_STUDENTS_FAIL':
      return Object.assign({}, state, { error: action.payload.error });

    default:
      return state
  }
}
export default userState;
