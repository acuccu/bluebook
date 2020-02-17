import React from 'react';
import BirthdaySelector from './birthday_selector';
import InputField from './input_field';

class SignUpForm extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dobUpdate = this.dobUpdate.bind(this);
        this.signUp = this.props.signUp.bind(this);
        this.inputUpdate = this.inputUpdate.bind(this);
        this.update
        this.state = {
            newUser: this.props.newUser,
            signUpErrors: {}
        }

    };

    handleSubmit (e) {
        e.preventDefault();
        this.validateFields(this.state);
        this.signUp(this.state);
    };

    inputUpdate(field, value) {
        this.setState({ [field]: value });
      };

    update(field) {
        e => this.setState({ [field]: e.target.value });
      };


      validateFields (userInfo) {
        const signUpErrors = {
            first_name: '',
            last_name: '',
            email: '',
            celphhone: '',
            gender: '',
            invalid: false
        }

        if (userInfo.first_name === "") {
            signUpErrors['first_name'] = 'What\`s your name?';
            signUpErrors['presence'] = true;
        } 

        if (userInfo.last_name === "") {
            signUpErrors['last_name'] = 'What\`s your name?';
            signUpErrors['presence'] = true;
        }

        if (userInfo.email === "") {
            signUpErrors['email'] = 'You\'ll use this when you log in and if you ever need to reset your password.';
            signUpErrors['presence'] = true;
        }

        if (userInfo.cellphone === "" && userInfo.cellphone.length != 10) {
            signUpErrors['cellphone'] = 'You\'ll use this when you log in and if you ever need to reset your password.';
            signUpErrors['presence'] = true;
        }

        if (userInfo.password === "" || userInfo.password.length > 6) {
            signUpErrors['password'] = 'Enter a combination of at least six characters.';
            signUpErrors['presence'] = true;
        }

        if (userInfo.gender === "") {
            signUpErrors['gender'] = 'Please choose a gender.';
            signUpErrors['presence'] = true;
        }

        this.setState({'signUpErrors': signUpErrors});
    }

    dobUpdate({month, day, year}) {
        const bday = `${month}/${day}/${year}`;
        this.setState({['dob']: bday})
    };

    removeSessionErrors() {
        this.props.update( "sessionErrors", {} );
      }


    render() {
        return (
        <div className='Signup-top'>
                    <div className="signup-invitation">
                        <h2>Sign Up</h2>
                        <p>It's quick and easy.</p>
                    </div>

                <div className='signup-form'> 
                <form onSubmit={this.handleSubmit}>
                    <div className='signup-names'>
                        <InputField inputUpdate={this.inputUpdate}
                            fieldName="first_name"
                            fieldValue={ this.state.newUser.first_name }
                            fieldType="text"
                            fieldErrorMessage="What's your name?"
                            fieldPlaceHolder="First name"
                            errors={ this.state.signUpErrors }/>

                        <InputField inputUpdate={this.inputUpdate}
                            fieldName="last_name"
                            fieldValue={ this.state.newUser.last_name }
                            fieldErrorMessage="What's your name?"
                            fieldPlaceHolder="Last name"
                            errors={ this.state.signUpErrors }/>
                </div>
                
                <div className="signup-auth">
                    <InputField inputUpdate={this.inputUpdate}
                        fieldName="email"
                        fieldType="text"
                        fieldValue={ this.state.newUser.email }
                        fieldErrorMessage="You'll use this when you log in and if you ever need to reset your password"
                        fieldPlaceHolder="Email or mobile number"
                        errors={ this.state.signUpErrors }/>

                    <InputField inputUpdate={this.inputUpdate}
                        fieldName="cellphone"
                        fieldType="text"
                        fieldValue={ this.state.newUser.cellphone }
                        fieldErrorMessage="You'll use this when you log in and if you ever need to reset your password"
                        fieldPlaceHolder="Email or mobile number"
                        errors={ this.state.signUpErrors }/>

                    <InputField inputUpdate={this.inputUpdate}
                        fieldName="password"
                        fieldType="password"
                        fieldValue={ this.state.newUser.password }
                        fieldErrorMessage="Enter a combination of at least six numbers, letters, and punctuation marks (like ! and \&)."
                        fieldPlaceHolder="New Password"
                        errors={ this.state.signUpErrors }/>
                </div>

                <div className='bday'>
                        <BirthdaySelector dobUpdate={this.dobUpdate} />
                </div>

                <div className='gender'>
                <label>Gender </label>
                    <div className='gender-radio'>
                    <span>
                    <input onClick={this.update('gender')} type="radio" id="male" name="gender" value="male"/>
                    <label >Male</label></span>
                    <span>
                    <input onClick={this.update('gender')} type="radio" id="female" name="gender" value="female"/>
                    <label >Female</label></span>
                    <span>
                    <input onClick={this.update('gender')} type="radio" id="other" name="gender" value="other"/>
                    <label >Other</label></span></div>
                </div>
                <button className="signup-button" type='submit' value={this.props.formType}>Sign Up</button>
            </form>
            </div>
        </div>
        )
    };
}

export default SignUpForm;