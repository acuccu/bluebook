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
        this.validateFields = this.validateFields.bind(this);
        this.update
        this.state = {
            newUser: this.props.newUser,
            signUpErrors: {}
        }

    };

    handleSubmit (e) {
        e.preventDefault();
        this.validateFields(this.state.newUser);
        this.signUp(this.state.newUser);
    };

    inputUpdate(field, value) {
        const newState = Object.assign({}, this.state.newUser, {[field]: value});
        debugger
        this.setState({newUser: newState })
      };


    update(field) {
        return e => {
            const newState = Object.assign({}, this.state.newUser, {[field]: e.target.value});
            this.setState({newUser: newState })
        };
    };


      validateFields (userInfo) {
        const signUpErrors = {
            first_name: false,
            last_name: false,
            email: false,
            cellphone: false,
            gender: false,
            message: false,
        }
        if (userInfo.first_name === "") {
            signUpErrors['first_name'] = true;
        } else { 
            signUpErrors['first_name'] = false};

        if (userInfo.last_name === "") {
            signUpErrors['last_name'] = true;
        }  else { signUpErrors['last_name'] = false};

        if (userInfo.email === "") {
            signUpErrors['email'] = true;
        } else { signUpErrors['email'] = false};

        if (userInfo.cellphone === "" || userInfo.cellphone.length != 10) {
            signUpErrors['cellphone'] = true;
        } else { signUpErrors['cellphone'] = false};

        if (userInfo.password === "" || userInfo.password.length > 6) {
            signUpErrors['password'] = true;
        } else { signUpErrors['password'] = false};

        if (userInfo.gender === "") {
            signUpErrors['gender'] = true;
        } else { signUpErrors['gender'] = false};
        
        this.setState({signUpErrors: signUpErrors});

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
                            id="first_name"
                            fieldName="first_name"
                            fieldValue={ this.state.newUser.first_name }
                            fieldType="text"
                            fieldErrorMessage="What's your name?"
                            fieldPlaceHolder="First name"
                            errorCheck = {this.errorCheck}
                            errors={ this.state.signUpErrors }/>

                        <InputField inputUpdate={this.inputUpdate}
                            id="last_name"
                            fieldName="last_name"
                            fieldValue={ this.state.newUser.last_name }
                            fieldErrorMessage="What's your name?"
                            fieldPlaceHolder="Last name"
                            errorCheck = {this.errorCheck}
                            errors={ this.state.signUpErrors }/>
                </div>
                
                <div className="signup-auth">
                    <InputField inputUpdate={this.inputUpdate}
                        id="email"
                        fieldName="email"
                        fieldType="text"
                        fieldValue={ this.state.newUser.email }
                        fieldErrorMessage="You'll use this when you log in and if you ever need to reset your password"
                        fieldPlaceHolder="Email"
                        errorCheck = {this.errorCheck}
                        errors={ this.state.signUpErrors }/>

                    <InputField inputUpdate={this.inputUpdate}
                        id="cellphone"
                        fieldName="cellphone"
                        fieldType="text"
                        fieldValue={ this.state.newUser.cellphone }
                        fieldErrorMessage="You'll use this when you log in and if you ever need to reset your password"
                        fieldPlaceHolder="Mobile number"
                        errorCheck = {this.errorCheck}
                        errors={ this.state.signUpErrors }/>
                </div>

                <div className="password">
                    <InputField inputUpdate={this.inputUpdate}
                        id="password"
                        fieldName="password"
                        fieldType="password"
                        fieldValue={ this.state.newUser.password }
                        fieldErrorMessage="Enter a combination of at least six numbers, letters, and punctuation marks (like ! and \&)."
                        fieldPlaceHolder="New Password"
                        errorCheck = {this.errorCheck}
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
                    <input onClick={this.update('gender')} type="radio" id="other" name="gender" value="other" defaultChecked/>
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