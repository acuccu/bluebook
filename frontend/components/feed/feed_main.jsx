import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from './feed_posts_container';
import LoggedInNav from '../Nav/logged_in_container';


class ProfileMain extends React.Component {

    constructor(props) {
        super(props);
    };


    componentDidMount () {
        this.props.fetchFriends(this.props.currentUserId).then(() => {
            this.props.fetchPosts(this.props.currentUserId)
        })
    }


    

    render () {
        

        return (
            <div className='feed'>
                <LoggedInNav isOpen={this.props.isOpen} showModal={this.props.showModal} badge={this.props.badge}/>
            <div >
                <div className='feedContent'>
                <SideBar isOpen={this.props["isOpen"]} showModal={this.props.showModal} />
                <PostIndexContainer />
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 