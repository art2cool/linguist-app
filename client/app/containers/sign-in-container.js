import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/app';
import * as UserActions from '../actions/user-actions';

function mapStateToProps (state) {
    return {
        user: state.user
    }
}
function mapDispatchToProps (dispatch) {
    return {
        signIn: bindActionCreators(UserActions.signIn, dispatch),
        logout: bindActionCreators(UserActions.logout, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps);
