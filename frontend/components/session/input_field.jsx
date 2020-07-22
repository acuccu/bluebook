import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

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
        return e => {
            this.setState({fieldValue: e.target.value},
        this.props.inputUpdate(this.props.fieldName, e.target.value))};
       
    }

    errorDisplay() {
        const that = this; 
        return e => {
            if (that.state.message) {
            that.setState({message: false});
        } else {
            that.setState({message: true});
        }}
    }


    render() {
        const cssClass = this.props.fieldName;
        const iconHidden = this.props.errors[this.props.fieldName] ? "" : " hidden";
        const isValid = this.props.errors[this.props.fieldName] ? " invalid" : "";
        const errorVisible = (this.props.errors[this.props.fieldName] && this.state.message) ? "" : " hidden";
    
        return (

            <div className={ `${cssClass} field-set` }>

            <div className={ "error-message" + errorVisible }>
                <span>{ this.props.fieldErrorMessage }</span>
            </div>

            <input
                type={ this.props.fieldType }
                className={ "signUpInput" + isValid }
                value={ this.state.fieldValue }
                placeholder={ this.props.fieldPlaceHolder }
                onChange={this.update()}
                onBlur={  this.errorDisplay() }
                onFocus={ this.errorDisplay() }
                />
            <FontAwesomeIcon className={ "fas fa-exclamation-circle" +  iconHidden } icon={faExclamationCircle} />
            </div>
        );
    }
}

export default InputField; 