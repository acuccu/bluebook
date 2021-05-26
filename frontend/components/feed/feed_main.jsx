import React from 'react';
import {withRouter} from 'react-router-dom';
import SideBar from './side_bar'
import PostIndexContainer from './feed_posts_container';
import LoggedInNav from '../Nav/logged_in_container';


class ProfileMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetchUsers: false,
            fetched: false
        }
        this.fetchFunc = this.fetchFunc.bind(this);
    };

    fetchFunc () {
        

        if (!this.state.fetchUsers) {
            this.props.fetchUsers().then(() => {
                console.log(this.props.users);
                this.props.users.forEach(userId => {
                    this.props.fetchFriends(userId).then(() => {
                        this.props.fetchPosts(userId).then(()=>{
                            this.setState({fetched: true, fetchUsers: true});

                        })
                    })
                })  
            })
        }
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