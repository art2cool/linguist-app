import StudentsService from '../services/students';

export function getStudents() {
  return (dispatch) => {

    StudentsService.getAllStudents()
      .then(response => {
        // console.log(response)
        if (response.status === 200) {
          dispatch({
            type: "GET_STUDENTS_SUCCESS",
            payload: {
              students: response.data
            }
          });
        }
      })
      .catch(error => {
        console.log(error)
        // dispatch({
        //   type: "GET_STUDENTS_FAIL",
        //   payload: {
        //     error: error.response.data.err
        //   }
        // })
      })
  }
}