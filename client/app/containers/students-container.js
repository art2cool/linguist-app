import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/app';
import * as StudentsActions from '../actions/students-actions';

function mapStateToProps (state) {
    return {
        students: state.students,
        error: state.error
    }
}
function mapDispatchToProps (dispatch) {
    return {
        getStudents: bindActionCreators(StudentsActions.getStudents, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps);
