import React from 'react';
import BirthdaySelector from './BirthdaySelector';

class SignUpForm extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.newUser;
        this.dobUpdate = this.dobUpdate.bind(this);
        this.signUp = this.props.signUp.bind(this);
    };

    handleSubmit (e) {
        e.preventDefault();
        this.signUp(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
      };

    dobUpdate({month, day, year}) {
        const bday = `${month}/${day}/${year}`;
        this.setState({['dob']: bday})
    };



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
                        <input type="text" 
                        placeholder='First name'
                        onChange={this.update('first_name')} 
                        value={this.state.auth}/>
                    <div></div>
                        <input type="text" 
                        placeholder='Last name'
                        onChange={this.update('last_name')} 
                        value={this.state.auth}/>
               </div>
               
               <div className="signup-auth">
                   <input 
                   type="text" 
                    placeholder='Email'
                   onChange={this.update('email')} 
                   value={this.state.auth}/>
                <div></div>
                   <input type="text" 
                   placeholder='Mobile number'
                   onChange={this.update('cellphone')} 
                   value={this.state.auth}/>
               </div>

                <div className='password'>          
                    <input type="password" 
                    placeholder='Password'
                    onChange={this.update('password')} 
                    value={this.state.password}/>
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
               {/* <div className='TOS'><p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p></div> */}
               <button className="signup-button" type='submit' value={this.props.formType}>Sign Up</button>
           </form>
           </div>
       </div>
    )
    }
}

export default SignUpForm;