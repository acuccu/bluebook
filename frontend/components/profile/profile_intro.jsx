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
                <p>Lives in </p> <p>{`${this.user.location}`}</p>
               </span>

               <span className='icon-span'>
                <FontAwesomeIcon className='icon-intro' icon={faGraduationCap} />
                <p>Went to </p> <p>{`${this.user.education}`}</p>
               </span>

               <span className='icon-span'>
               <FontAwesomeIcon className='icon-intro' icon={faBriefcase} />
               <p>Works at </p> <p>{`${this.user.work_place}`}</p>
               </span>
            </div>

           

            <Link to='/in-progress'>Edit</Link>

        </div>)
    };

}




export default ProfileIntro;