import { connect } from 'react-redux';
import SearchBar from './search_bar';
import {fetchUsers} from '../../actions/user_actions'
import {withRouter} from 'react-router-dom'


const mapStateToProps = ({entities: {users}}) => {
   return( {
        users: Object.values(users)
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar)); 