import { connect } from 'react-redux';
import ProfileMain from './profile_main';
import {withRouter} from 'react-router-dom'
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = (ownProps) => {
    return({
      pId: 10
    })};
  

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileMain));