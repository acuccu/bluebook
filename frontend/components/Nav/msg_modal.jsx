import React from 'react';
import ReactModal from 'react-modal';



class MSGModal extends React.Component {

	constructor(props) {
        super(props);
    };

    render () {
		

		return(
		
		<ReactModal className="msg-modal" isOpen={this.props["isOpen"]} overlayClassName={
			"ReactModal_Overlay"}>
            <div class="content"> 
							<div id="msgName"> 
							Antonio Cuccu <div onClick={() => this.props.showModal()}>X</div>
							</div>	
							<p>Feel free to get in touch with me through <strong>this form</strong>. I'm looking forward to the opportnity to make your ideas reality.</p>
							<form action="https://formspree.io/xrgyjrab" method="post">
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
							</form>
						</div>
       
		</ReactModal>
		)};

    
}

export default MSGModal;