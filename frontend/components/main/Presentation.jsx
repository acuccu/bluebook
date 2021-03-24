import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGit} from '@fortawesome/free-brands-svg-icons'


const Presentation = props => {
    return (
        <div className='presentation-top'>
        
       <div className='Signup-top'></div>
            <div className='pres-motto'>
                <h2>Join 20,000 friends under<br /> the sea on Bluebook</h2>
            </div>
            <div className='pres-icons'>
                <p><img src={window.turtleicon} /><span className='icon-bold'> See photos and updates</span>  from friends in News Feed. <br /></p>
               <p> <img src={window.fishicon} /><span className='icon-bold'> Share what's new </span>  in your life on your Timeline. <br /></p>
                <p><img src={window.whaleicon} /><span className='icon-bold'> Find more </span>  of what you're looking for with Bluebook Search.<br /></p>
            </div>
            <div className="splashlinks">
                <a href="https://www.linkedin.com/in/antonio-cuccu-4b0906114/" target="blank_"><FontAwesomeIcon className="splash-link" icon={faLinkedin} /></a>
                <a href="https://github.com/acuccu" target="blank_"><FontAwesomeIcon className="splash-link" icon={faGit} /></a>
            </div> 

        </div>
    );
}


export default Presentation;
