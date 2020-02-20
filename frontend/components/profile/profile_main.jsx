import React from 'react';
import {withRouter} from 'react-router-dom';
import Banner from './banner_container';
import ProfileIntro from './profile_intro_container';
import PostIndexContainer from '../posts/post_index_container';


class ProfileMain extends React.Component {

    render () {
        return (
            <div className='profile'>
                <Banner />
                <div className='profile-content'>
                    <ProfileIntro />
                    <PostIndexContainer />
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 