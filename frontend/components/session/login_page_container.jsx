import { connect } from 'react-redux';
import LoginPage from './login_page';
import {login} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => ({
    errors: state.errors,
    credentials: {
        auth: '',
        password: ''
    }
});

const mapDispatchToProps = dispatch =>({
    login: user => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));