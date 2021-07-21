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
        dob: '01/01/1995',
        gender: 'other',
        avatar: 9,
        location: 'from the land',
        work_place: 'dream job',
        education: 'College University',
        bio: 'Welcome'
    }
});

const mapDispatchToProps = dispatch => ({
    signUp: newUser => dispatch(signUp(newUser)),
});

export default connect (mapStateToProps, mapDispatchToProps)(SignUpForm);