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
      }

    dobUpdate({month, day, year}) {
        const bday = `${month}/${day}/${year}`;
        this.setState({[dob]: bday})
    };



    render() {
    return (
       <div>
           <form onSubmit={this.handleSubmit}>
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
               <label>Password
                   <input type="password" 
                   onChange={this.update('password')} 
                   value={this.state.password}/>
               </label>
               <div className='bday'>
               <label>Birthday
                    <Birthday dobUpdate={dobUpdate} />
               </label>
               </div>
               <div className='gender'>
               <label>Gender
                    
               </label>
               </div>
               
               <button type='submit' value={this.props.formType} />
           </form>
       </div>
    )
    }
}

export default SignUpForm;