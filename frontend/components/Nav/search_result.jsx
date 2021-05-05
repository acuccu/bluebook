import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom'

class SearchResult extends React.Component {
    constructor(props) {
        super(props)
    };

    render () {
        return(
            <ReactModal className="searchModal" isOpen={Boolean(this.props.users[0])} overlayClassName={"ReactModal_Overlay"}
            shouldFocusAfterRender={false}>
                { this.props.users.map(user =>
                    <div>
                        <Link to={`/users/${user.id}`}><p className='searchResult'><div className={`nav${user.avatar}avatar`}/><p className='searchName'>{user.first_name} {user.last_name}</p></p></Link>
                    </div>
                    )
                }
            </ReactModal>
        )
    }
}

export default SearchResult