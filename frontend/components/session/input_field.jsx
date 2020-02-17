import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fieldValue: '',
          error: this.props.errors[this.props.fieldName],
          help: false
        }
    }
    
    update() {
        return e => {this.setState({'fieldValue': e.target.value}, 
            this.props.inputUpdate(this.props.fieldName, this.state.fieldValue))};
       
    }

    render() {
        const cssClass = this.props.fieldName;
        const iconHidden = this.state.error !== '' ? "" : " hidden";
        const isValid = this.state.error !== '' ? " invalid" : "";
        const errorMessageHidden = this.state.error !== '' ? "" : " hidden";

        return (

            <div className={ `${cssClass} field-set` }>
            <div className={ "error-message" + errorMessageHidden }>
                <span>{ this.state.error }</span>
            </div>
            <input
                type={ this.props.fieldType }
                className={ "signUpInput" + isValid }
                value={ this.state.fieldValue }
                placeholder={ this.props.fieldPlaceHolder }
                onChange={this.update()}
                />
            <i className={ "fas fa-exclamation-circle" +  iconHidden }></i>
            </div>
        );
    }
}

export default InputField; 