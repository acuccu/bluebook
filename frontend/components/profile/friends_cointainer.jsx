import { connect } from 'react-redux';
import Friends from './friends'
import {withRouter} from 'react-router-dom'

const mapStateToProps = ({entities: {users, friends}}, ownProps) => {
    
    let friendships = friends[ownProps.match.params.userId] ? Object.values(friends[ownProps.match.params.userId].accepted) : [];
    debugger
    return({
        users: users, 
        friendships: friendships,
        profileId: ownProps.match.params.userId
    });
}

export default withRouter(connect(mapStateToProps)(Friends));