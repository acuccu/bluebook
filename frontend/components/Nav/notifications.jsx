import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import {Link} from 'react-router-dom'


class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.notifications = this.notifications.bind(this);
    }

    handleClickOutside() {
       this.props.open && this.props.outsideClick();
      }

    notifications (arrayReq) {
        if (arrayReq[0]) {
            return (this.props.requests.map(user =>
                <div className="notification">
                     <Link className='noteLink' onClick={() => this.props.openNotifications()} to={`/users/${user.id}`}><div className={`nav${user.avatar}avatar`}/><p className='noteName'>{user.first_name} {user.last_name}</p></Link><p className='note'>has requested your friendship</p>
                </div>))
        } else {
           return (<div className="notification">
                     <p className='noNote'>No new friendship requests</p>
                </div>)
        }
    }

    render () {
        return(
            <div className='notifParent'>
            {this.props.open ? <div className="notifications">
                {this.notifications (this.props.requests)}
            </div> : null}
            </div>
        )
    }

}

export default enhanceWithClickOutside(Notifications);