import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/sing-in';
import * as UserActions from '../actions/user-actions';

function mapStateToProps (state) {
    return {
        user: state.user.userData
    }
}
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
