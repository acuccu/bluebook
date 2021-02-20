import React from 'react';

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props)
        this.currentUser = this.props.currentUser
        this.updateUser = this.props.updateUser
        this.state = {
            bio: this.currentUser.bio,
            location: this.currentUser.location,
            eduction: this.currentUser.eductation,
            work_place: this.currentUser.work_place
        }
    }

    inputUpdate(field) {
        this.setState({[field]: e.target.value });
    };

    render () {
        return(
            <div className='profile-intro'>
            <div className='profile-intro-title'> 
                <div className='icon-globe-div'><FontAwesomeIcon className='icon-globe' icon={faGlobeAmericas} /></div>
                <h3>Intro</h3>
            </div>
             
            <span className='bio-span'>
                <input type="text" placeholder={`${this.currentUser.bio}`} oncChange={this.inputUpdate('bio')} value={`${this.state.bio}`} />
            </span>

            <div className='icon-div'>
                <span className='icon-span'>
                <FontAwesomeIcon className='icon-intro' icon={faHome} />
                <p className='intro-black'>Lives in </p>
                <input type="text" placeholder={`${this.currentUser.location}`} oncChange={this.inputUpdate('location')} value={`${this.state.location}`} />
               </span>

               <span className='icon-span'>
                <FontAwesomeIcon id="grad-cap" className='icon-intro' icon={faGraduationCap} />
                <p className='intro-black'>Went to </p>
                <input type="text" placeholder={`${this.currentUser.education}`} oncChange={this.inputUpdate('education')} value={`${this.state.education}`} />
               </span>

               <span className='icon-span'>
               <FontAwesomeIcon className='icon-intro' icon={faBriefcase} />
               <p className='intro-black'>Works at </p>
               <input type="text" placeholder={`${this.currentUser.work_place}`} oncChange={this.inputUpdate('work_place')} value={`${this.state.work_place}`} />
               </span>
            </div>

           
            <div className="edit-intro-button">
                <Link  to={`/users/${this.user.id}/edit`}>Edit details</Link>
            </div>
        </div>)
        )
    };

}

export default ProfileEdit;