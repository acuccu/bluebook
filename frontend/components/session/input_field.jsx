import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fieldValue: '',
          error: this.props.errors[this.props.fieldName],
          help: false,
          message: false
        }
        this.errorDisplay = this.errorDisplay.bind(this);
    }
    
    update() {  
        return e => {this.setState({fieldValue: e.target.value},
        this.props.inputUpdate(this.props.fieldName, this.state.fieldValue))};
       
    }

    errorDisplay() {
        const that = this; 
        return e => {
            debugger
            if (that.state.message) {
            that.setState({message: false});
        } else {
            that.setState({message: true});
        }}
    }


    render() {
        const cssClass = this.props.fieldName;
        const iconHidden = this.state.error ? "" : " hidden";
        const isValid = this.state.error ? " invalid" : "";
        if (this.props.id === document.activeElement.id) {
            focus = true; 
          }
        return (

            <div className={ `${cssClass} field-set` }>

            {   this.props.errors[this.props.fieldName] && 
                this.state.message && 
                (<div className={ "error-message"}>
                <span>{ this.props.fieldErrorMessage }</span>
                </div>)
            }
            
            <input
                type={ this.props.fieldType }
                className={ "signUpInput" + isValid }
                value={ this.state.fieldValue }
                placeholder={ this.props.fieldPlaceHolder }
                onChange={this.update()}
                onBlur={  this.errorDisplay() }
                onFocus={ this.errorDisplay() }
                />
            <i className={ "fas fa-exclamation-circle" +  iconHidden }></i>
            </div>
        );
    }
}

export default InputField; 