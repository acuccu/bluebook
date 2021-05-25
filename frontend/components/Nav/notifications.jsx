import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom'


class Notifications extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return(
            <div className='notifParent'>
            {(this.props.open && this.props.requests[0]) ? <div className="notifications">
                { this.props.requests.map(user =>
                    <div className="notification">
                         <Link className='noteLink' onClick={() => this.props.openNotifications()} to={`/users/${user.id}`}><div className={`nav${user.avatar}avatar`}/><p className='noteName'>{user.first_name} {user.last_name}</p></Link><p className='note'>has requested your friendship</p>
                    </div>
                    )}
            </div> : null }
            </div>
        )
    }

}

export default Notifications