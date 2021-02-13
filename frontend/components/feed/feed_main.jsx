import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from './feed_posts_container';
import MSGModal from './msg_modal'



class ProfileMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    };

    setShow () {
        () => this.setState({show: true});
    };

    render () {
       
        return (
            <div className='feed'>
                <div className='profile-content'>
                <SideBar setShow={this.setShow} show={this.state.show} />
                <PostIndexContainer />
                <MSGModal setShow={this.setShow} show={this.state.show} />
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 