import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from './feed_posts_container';



class ProfileMain extends React.Component {

    constructor(props) {
        super(props);
    };

    

    render () {
       
        return (
            <div className='feed'>
                <div className='profile-content'>
                <SideBar isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
                <PostIndexContainer />
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 