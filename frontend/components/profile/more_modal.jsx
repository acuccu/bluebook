import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGit} from '@fortawesome/free-brands-svg-icons'

class MoreModal extends React.Component {

    constructor (props) {
        super(props)
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false
        }
    }

    handleMouseHover() {
        let newState = !this.state.isHovering;
        this.setState({isHovering: newState});
    }

    render () {
        return (
            <div>
            <div id="more" onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                 More 
            </div>
                {this.state.isHovering && 
                <div className="more-modal" onMouseLeave={this.handleMouseHover}>
                    <div><a href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/" target="blank_"><FontAwesomeIcon className="more-icon" icon={faLinkedin} />LinkedIn</a></div>
                    <div><a href="https://github.com/acuccu" target="blank_"><FontAwesomeIcon className="splash-link" icon={faGit} />gitHub</a></div>
                    <div><a href="https://acuccu.github.io/" target="blank_">Personal website</a></div>
                </div>}
                
            </div>
        )
    }
}

export default MoreModal;