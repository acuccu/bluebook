import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


class MSGModal extends React.Component {

	constructor(props) {
        super(props)
		this.handleClick = this.handleClick.bind(this)
		this.handleOnChange = this.handleOnChange.bind(this)
		this.submitMSG = this.submitMSG.bind(this)
		this.state = {
			name: "",
			email: "",
			message: ""
		}
    };

	handleOnChange(field) {
        return e => {
        this.setState({[field]: e.target.value})};
    };

	handleClick () {
		return e => 
		console.log(this.props)
	}

	createMSG (msg) {
		this.submitMSG(msg).then(console.log('ok'))
	}

	submitMSG (msg) {
		return (
			$.ajax({
				url: `https://formspree.io/xrgyjrab`,
				method: `POST`,
				data: {msg}
				}
			)
		)
	}

    render () {
		console.log(this.props)
		return(
		
		<ReactModal className="msg-modal" isOpen={this.props["isOpen"]} overlayClassName={
			"ReactModal_Overlay"} >
            <div className="content"> 
			
							<div id="msgName"><div id="online-status"></div>
							Antonio Cuccu <div id="close-modal" onClick={this.props.showModal}>x</div>
							</div>	
							<p id="initial-msg">Feel free to get in touch with me through this form. I'm looking forward to the opportnity to make your ideas reality.</p>
							<form action="https://formspree.io/xrgyjrab" method="post">
								<div className="fields">
									<div >
										<input 
											className="field-half" 
											type="text" name="name" 
											id="name" 
											value={this.state.name}
											onChange={this.handleOnChange(`name`)}
											placeholder="Please enter your name" 
										/>
									</div>
									<div >
										<input 
											className="field-half" 
											type="email" name="email" 
											id="email" 
											value={this.state.email}
											onChange={this.handleOnChange(`email`)}
											placeholder="Please enter your email" 
										/>
									</div>
									<div className="input-field">
										<textarea 
											className="input-box" 
											name="message" 
											id="message" 
											value={this.state.message}
											onChange={this.handleOnChange(`message`)}
											placeholder="Type a message..." 
											rows="7">	
										</textarea>
										<ul className="actions">
											<li><input  className="chat-button" onClick={() => this.createMSG(this.state)}/><FontAwesomeIcon className="paperplane" icon={faPaperPlane} /></li>
										</ul>
									</div>
								</div>
							</form>
						</div>
       
		</ReactModal>
		)};

    
}

export default MSGModal;