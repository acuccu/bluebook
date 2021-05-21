import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from './feed_posts_container';
import LoggedInNav from '../Nav/logged_in_container';


class ProfileMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetched: false
        }
        this.fetchFunc = this.fetchFunc.bind(this);
    };

    fetchFunc () {
        this.props.users.forEach(userId => {
            this.props.fetchFriends(userId)
            this.props.fetchPosts(userId)
        });
        this.setState({fetched: true})
    }

    componentDidMount () {
        if (!this.state.fetched) {
            this.fetchFunc()
        }
    }

    

    render () {
       
        return (
            <div className='feed'>
                <LoggedInNav isOpen={this.props.isOpen} showModal={this.props.showModal} badge={this.props.badge}/>
            <div >
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