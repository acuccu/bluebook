import React from 'react';
import {withRouter, Switch, HashRouter} from 'react-router-dom';
import Banner from './banner_container';
import ProfileIntro from './profile_intro_container';
import ProfileEdit from './profile_edit_container'
import Friends from './friends_cointainer';
import PostIndex from '../posts/post_index_container';
import {ProtectedRoute} from '../../util/routes_util';


class ProfileMain extends React.Component {

    constructor (props) {
        super(props);
        this.editIntro = this.editIntro.bind(this);
        this.state = {
            didFetch: false,
            edit: false
        };
        
    }

    componentWillMount () {
        this.props.fetchUser(this.props.match.params.userId).then(() => {
            this.setState({didFetch: true})});   
    }

    editIntro () {
        if (this.state.edit) {
            this.setState({edit: false})
        } else {
            this.setState({edit: true})
        };
    }

    render () {
        return (
            <div className='profile'>
                <div>
                <Banner />
                <div className='profile-content'>
                    
                    <div className='side-bar'>
                    {!this.state.edit && <ProfileIntro editIntro={this.editIntro} />}
                    {this.state.edit && <ProfileEdit editIntro={this.editIntro} />}
                    {this.state.didFetch && <Friends />}
                    </div>
                    <PostIndex />
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfileMain); 