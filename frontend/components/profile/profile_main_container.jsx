import { connect } from 'react-redux';
import ProfileMain from './profile_main';
import {withRouter} from 'react-router-dom'
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return({
      pId: ownProps.match.params.userId
    })};
  

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileMain));