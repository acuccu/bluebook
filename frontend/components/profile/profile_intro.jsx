import React from 'react';
import {connect} from 'react-redux'

class ProfileIntro extends React.Component {

    constructor(props) {
        super(props)
        user = this.props.currentUser;
    }

    render () {
       
        <div className='profile-intro'>
             <h3>Intro</h3>
             <Link to='/in-progress'>Edit</Link>
            <div className='intro-info'> 

                <span className='bio-span'>
                    <p>{`${user.bio}`}</p>
                </span>

               <span className='location-span'>
               <img className='location-icon'/> 
               <label>Lives in </label> <p>{`${user.location}`}</p>
               </span>

               <span className='education-span'>
               <img className='education-icon'/> 
               <label>Went to </label> <p>{`${user.education}`}</p>
               </span>

               <span className='education-span'>
               <img className='education-icon'/> 
               <label>Went to </label> <p>{`${user.education}`}</p>
               </span>

               <span className='work-span'>
               <img className='work-icon'/> 
               <label>Works at </label> <p>{`${user.work_place}`}</p>
               </span>

            </div>
        </div>
    }

}

const mapStateToProps = ({session})=> ({
    currentUser: users[session.currentUserid]
});

connect(mapStateToProps)(ProfileIntro);


export default ProfileIntro;