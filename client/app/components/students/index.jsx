import React from 'react';

export default class Students extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getStudents()
  }

  render() {
    const students = this.props.students.students;
   let studentsList = students && students.map((student, index) => {
      return (<tr key={student._id}>
        <th scope="row">{++index}</th>
        <td>{student.name || '-'}</td>
        <td>{student.email || '-'}</td>
        <td>{student.phone || '-'}</td>
        <td>{student.lessons || '-'}</td>
        <td>{student.lenguages || '-'}</td>
        <td>{student.notes || '-'}</td>
      </tr>)
    })


    return (
      <div className="container">
            <h2>Students</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Lessons</th>
                    <th>Language</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsList}
                </tbody>
              </table>
            </div>
      </div>
    )
  }
}
