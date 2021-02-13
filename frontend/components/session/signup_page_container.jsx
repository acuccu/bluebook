import { connect } from 'react-redux';
import SignUpPage from './signup_page'
import {login} from '../../actions/session_actions'


const mapStateToProps = state => ({
    errors: state.errors,
    dob: "1/1/1995",
    credentials: {
        auth: "demo@bluebook.com", 
        password: "demodemo"
    }});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect (mapStateToProps, mapDispatchToProps)(SignUpPage);