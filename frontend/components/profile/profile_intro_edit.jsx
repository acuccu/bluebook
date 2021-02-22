import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser
        this.updateUser = this.props.updateUser.bind(this)
        this.inputUpdate = this.inputUpdate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.editIntro = this.props.editIntro.bind(this)
        this.state = {
            bio: this.currentUser.bio,
            location: this.currentUser.location,
            eduction: this.currentUser.eductation,
            work_place: this.currentUser.work_place
        }
    }

    inputUpdate(field) {
        return e => {
        this.setState({[field]: e.target.value })};
    };

    handleSubmit () {
        this.updateUser(this.state, this.currentUser.id).then(
            (user) => this.editIntro()
        )
    }

    render () {
        return(
            <div className='profile-intro'>
            <div className='profile-intro-title'> 
                <div className='icon-globe-div'><FontAwesomeIcon className='icon-globe' icon={faGlobeAmericas} /></div>
                <h3>Intro</h3>
            </div>
             
            <span className='bio-span'>
                <input type="text" placeholder={`${this.currentUser.bio}`} onChange={this.inputUpdate('bio')} value={`${this.state.bio}`} />
            </span>

            <div className='icon-div'>
                <span className='icon-span'>
                <FontAwesomeIcon className='icon-intro' icon={faHome} />
                <p className='intro-black'>Lives in </p>
                <input type="text" placeholder={`${this.currentUser.location}`} onChange={this.inputUpdate('location')} value={`${this.state.location}`} />
               </span>

               <span className='icon-span'>
                <FontAwesomeIcon id="grad-cap" className='icon-intro' icon={faGraduationCap} />
                <p className='intro-black'>Went to </p>
                <input type="text" placeholder={`${this.currentUser.education}`} onChange={this.inputUpdate('education')} value={`${this.state.education}`} />
               </span>

               <span className='icon-span'>
               <FontAwesomeIcon className='icon-intro' icon={faBriefcase} />
               <p className='intro-black'>Works at </p>
               <input type="text" placeholder={`${this.currentUser.work_place}`} onChange={this.inputUpdate('work_place')} value={`${this.state.work_place}`} />
               </span>
            </div>

                <div className="edit-intro-button" onClick={() => this.handleSubmit()}>
                    Submit Edit
                </div>
            
        </div>
        )
    };

}

export default ProfileEdit;