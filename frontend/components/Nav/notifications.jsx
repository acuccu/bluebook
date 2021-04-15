import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom'


class Notifications extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        return(
            <ReactModal className="notifications" isOpen={this.props.open} overlayClassName={"ReactModal_Overlay"}
            shouldFocusAfterRender={false}>
                { this.props.requests.map(user =>
                    <div className="notification">
                        <Link onClick={() => this.props.openNotifications()} to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link> has requested your friendship
                    </div>
                    )
                }
            </ReactModal>
        )
    }

}

export default Notifications