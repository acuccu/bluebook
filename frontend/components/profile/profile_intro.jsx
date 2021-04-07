import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';


class ProfileIntro extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.user || this.props.fetchUser(this.props.id)
    }


    render () {
        if (!this.props.user) {
            return null}
       return(
        <div className='profile-intro'>
            <div className='profile-intro-title'> 
                <div className='icon-globe-div'><FontAwesomeIcon className='icon-globe' icon={faGlobeAmericas} /></div>
                <h3>Intro</h3>
            </div>
             
            <span className='bio-span'>
                <p>{`${this.props.user.bio}`}</p>
            </span>

            <div className='icon-div'>
                <span className='icon-span'>
                <FontAwesomeIcon className='icon-intro' icon={faHome} />
                <p className='intro-black'>Lives in </p><p className='intro-blue'>{`${this.props.user.location}`}</p>
               </span>

               <span className='icon-span'>
                <FontAwesomeIcon id="grad-cap" className='icon-intro' icon={faGraduationCap} />
                <p className='intro-black'>Went to </p><p className='intro-blue'>{`${this.props.user.education}`}</p>
               </span>

               <span className='icon-span'>
               <FontAwesomeIcon className='icon-intro' icon={faBriefcase} />
               <p className='intro-black'>Works at </p><p className='intro-blue'>{`${this.props.user.work_place}`}</p>
               </span>
            </div>   
            
            {   this.props.currentUserId == this.props.user.id && 
                <div onClick={() => this.props.editIntro()} className="edit-intro-button">
                Edit details
                </div>
            }
        </div>)
    };

}




export default withRouter(ProfileIntro);