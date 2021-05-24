import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom'

class SearchResult extends React.Component {
    constructor(props) {
        super(props)
    };

    render () {
        return(
            <div>
            {this.props.users[0] && <div className="searchModal" >
                { this.props.users.map(user =>
                    <div>
                        <Link to={`/users/${user.id}`}><div className='searchResult'><div className={`nav${user.avatar}avatar`}/><p className='searchName'>{user.first_name} {user.last_name}</p></div></Link>
                    </div>
                    )
                }
            </div>}
            </div>
        )
    }
}

export default SearchResult