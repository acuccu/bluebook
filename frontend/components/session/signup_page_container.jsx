import { connect } from 'react-redux';
import SignUpPage from './signup_page'
import {login} from '../../actions/session_actions'


const mapStateToProps = state => ({
    errors: state.errors,
    credentials: {
        auth: "demo@bluebook.com", 
        password: "demodemo"
    }});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect (mapStateToProps, mapDispatchToProps)(SignUpPage);