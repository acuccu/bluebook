import { connect } from 'react-redux';
import Friends from './friends'
import {withRouter} from 'react-router-dom'

const mapStateToProps = ({entities: {users, friendships}}, ownProps) => {
    return({
        users: users, 
        friendships: Object.values(friendships[ownProps.match.params.userId].accepted),
        profileId: ownProps.match.params.userId
    });
}

export default withRouter(connect(mapStateToProps)(Friends));