import { connect } from 'react-redux';
import LoginForm from './login_form';
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
    login: credentials => dispatch(login(credentials))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
