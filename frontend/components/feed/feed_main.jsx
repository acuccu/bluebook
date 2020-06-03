import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from '../posts/post_index_container';



class ProfileMain extends React.Component {
    render () {
        return (
            <div className = 'feed'>
                <div className='profile-content'>
                <SideBar />
                <PostIndexContainer />
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 