import React from 'react';


class MSGModal extends React.Component {

	constructor(props) {
        super(props);
    };

    render () {
		

		return(
        <div className='modal' z-index={
			this.props.show ? '1' : '-1'
			}>
            <div class="content">
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
        </div>)
    }

    
}

export default MSGModal;