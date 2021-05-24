import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom'


class Notifications extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return(
            <div>
            {(this.props.open && this.props.requests[0]) ? <div className="notifications">
                { this.props.requests.map(user =>
                    <div className="notification">
                         <Link className='noteLink' onClick={() => this.props.openNotifications()} to={`/users/${user.id}`}><div className={`nav${user.avatar}avatar`}/><p className='noteName'>{user.first_name} {user.last_name}</p></Link><p className='note'>has requested your friendship</p>
                    </div>
                    )}
            </div> : <div className="notificationsClosed">
                        {this.props.requests.map(user =>
                            <div className="notification">
                                <Link className='noteLink' onClick={() => this.props.openNotifications()} to={`/users/${user.id}`}><div className={`nav${user.avatar}avatar`}/><p className='noteName'>{user.first_name} {user.last_name}</p></Link><p className='note'>has requested your friendship</p>
                            </div>
                        )}
                    </div>}
            </div>
        )
    }

}

export default Notifications