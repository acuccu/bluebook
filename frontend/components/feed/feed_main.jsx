import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from './feed_posts_container';
import LoggedInNav from '../Nav/logged_in_container';


class ProfileMain extends React.Component {

    constructor(props) {
        super(props);
    };

    

    render () {
       
        return (
            <div>
                <LoggedInNav />
            <div className='feed'>
                <div className='profile-content'>
                <SideBar isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
                <PostIndexContainer />
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 