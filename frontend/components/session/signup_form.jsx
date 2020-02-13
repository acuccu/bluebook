import React from 'react';
import BirthdaySelector from './BirthdaySelector';

class SignUpForm extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.newUser;
        this.dobUpdate = this.dobUpdate.bind(this);
    };

    handleSubmit () {
        e.preventDefault();
        this.props.action(this.state);
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
       <div>
                <div className="signup-invitation">
                    <h2>Sign Up</h2>
                    <p>It's quick and easy.</p>
                </div>

            <div className='signup-form'> 
            <form onSubmit={this.handleSubmit}>

                <div className='signup-names'>
                    <label>First Name:
                        <input type="text" 
                        onChange={this.update('first_name')} 
                        value={this.state.auth}/>
                    </label>
                    <label>Last Name:
                        <input type="text" 
                        onChange={this.update('last_name')} 
                        value={this.state.auth}/>
                    </label>
               </div>
               
               <div className="signup-auth">
                <label>E-mail:
                   <input 
                   type="text" 
                   onChange={this.update('email')} 
                   value={this.state.auth}/>
                </label>
                <label>Cellphone:
                   <input type="text" 
                   onChange={this.update('auth')} 
                   value={this.state.auth}/>
                </label>
               </div>

                <div className='password'>          
                <label>Password
                    <input type="password" 
                    onChange={this.update('password')} 
                    value={this.state.password}/>
                </label>
               </div>

               <div className='bday'>
               <label>Birthday
                    <BirthdaySelector dobUpdate={this.dobUpdate} />
               </label>
               </div>
               <div className='gender'>
               <label>Gender
                <input onClick={this.update('gender')} type="radio" id="male" name="gender" value="male"/>
                <label >Male</label>
                <input onClick={this.update('gender')} type="radio" id="female" name="gender" value="female"/>
                <label >Female</label>
                <input onClick={this.update('gender')} type="radio" id="other" name="gender" value="other"/>
                <label >Other</label>
               </label>
               </div>
               
               <button className="signup-button" type='submit' value={this.props.formType}>Sign Up</button>
           </form>
           </div>
       </div>
    )
    }
}

export default SignUpForm;