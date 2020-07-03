import React from 'react';
import {withRouter} from 'react-router-dom';
import Banner from './banner_container';
import ProfileIntro from './profile_intro_container';
import Friends from './friends_cointainer';
import PostIndexContainer from '../posts/post_index_container';


class ProfileMain extends React.Component {

    constructor (props) {
        super(props);
        this.state = {didFetch: false};
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId).then(() => {
            this.setState({didFetch: true})});   
    }

    render () {
        return (
            <div className='profile'>
                <Banner />
                <div className='profile-content'>
                    <div className='side-bar'>
                    <ProfileIntro />
                    {this.state.didFetch && <Friends />}
                    </div>
                    {/* <PostIndexContainer /> */}
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 