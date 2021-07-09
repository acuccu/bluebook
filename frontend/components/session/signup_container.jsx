import { connect } from 'react-redux';
import {signUp} from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
    errors: state.errors,
    newUser: {
        first_name: '',
        last_name: '',
        email: '',
        cellphone: '',
        password: '',
        dob: '',
        gender: 'other',
        avatar: 9,
        location: 'from the land',
        work_place: 'dream job',
        education: 'College University',
        bio: 'Hello recruiter, thank you for visiting!'
    }
});

const mapDispatchToProps = dispatch => ({
    signUp: newUser => dispatch(signUp(newUser)),
});

export default connect (mapStateToProps, mapDispatchToProps)(SignUpForm);