import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';


class ProfileIntro extends React.Component {

    constructor(props) {
        super(props);
        this.user = this.props.user;
    }

    render () {
       return(
        <div className='profile-intro'>
            <div className='profile-intro-title'> 
                <div className='icon-globe-div'><FontAwesomeIcon className='icon-globe' icon={faGlobeAmericas} /></div>
                <h3>Intro</h3>
            </div>
             
            <span className='bio-span'>
                <p>{`${this.user.bio}`}</p>
            </span>

            <div className='icon-div'>
                <span className='icon-span'>
                <FontAwesomeIcon className='icon-intro' icon={faHome} />
                <p className='intro-black'>Lives in </p><p className='intro-blue'>{`${this.user.location}`}</p>
               </span>

               <span className='icon-span'>
                <FontAwesomeIcon id="grad-cap" className='icon-intro' icon={faGraduationCap} />
                <p className='intro-black'>Went to </p><p className='intro-blue'>{`${this.user.education}`}</p>
               </span>

               <span className='icon-span'>
               <FontAwesomeIcon className='icon-intro' icon={faBriefcase} />
               <p className='intro-black'>Works at </p><p className='intro-blue'>{`${this.user.work_place}`}</p>
               </span>
            </div>

           
            <div className="edit-intro-button">
                <Link  to='/in-progress'>Edit details</Link>
            </div>
        </div>)
    };

}




export default ProfileIntro;