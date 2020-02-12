import React from 'react';

class LoginForm extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.user
    };

    handleSubmit () {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
      }

    render() {
    return (
       <div>
           <form onSubmit={this.handleSubmit}>
               <label>Email or Phone
                   <input type="text" onChange={this.update('auth')} value={this.state.auth}/>
               </label>
               <label>Password
                   <input type="password" onChange={this.update('password')} value={this.state.password}/>
               </label>
               <button type='submit' value={this.props.formType} />
           </form>
       </div>
    )
    }
}

export default LoginForm;