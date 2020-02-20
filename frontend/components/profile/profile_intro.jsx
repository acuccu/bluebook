import React from 'react';
import {Link} from 'react-router-dom';

class ProfileIntro extends React.Component {

    constructor(props) {
        super(props);
        this.user = this.props.user;
    }

    render () {
       return(
        <div className='profile-intro'>
             <h3>Intro</h3>
             <Link to='/in-progress'>Edit</Link>
            <div className='intro-info'> 

                <span className='bio-span'>
                    <p>{`${this.user.bio}`}</p>
                </span>

               <span className='location-span'>
               <img className='location-icon'/> 
               <label>Lives in </label> <p>{`${this.user.location}`}</p>
               </span>

               <span className='education-span'>
               <img className='education-icon'/> 
               <label>Went to </label> <p>{`${this.user.education}`}</p>
               </span>

               <span className='education-span'>
               <img className='education-icon'/> 
               <label>Went to </label> <p>{`${this.user.education}`}</p>
               </span>

               <span className='work-span'>
               <img className='work-icon'/> 
               <label>Works at </label> <p>{`${this.user.work_place}`}</p>
               </span>

            </div>
        </div>)
    };

}




export default ProfileIntro;