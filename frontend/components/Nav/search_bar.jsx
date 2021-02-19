import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import SearchResult from './search_result'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ""
        };
        this.searchUpdate = this.searchUpdate.bind(this);
        this.userNameFilter = this.userNameFilter.bind(this)
    }

    searchUpdate() {
        return e => {
            this.setState({query: e.target.value});
        }
    };

    userNameFilter (user) {
        let nameVar = false
        if (this.state.query) {
            let searchQuery = this.state.query.toLowerCase();
            nameVar = (
                user.first_name.toLowerCase().includes(searchQuery)
                ||
                user.last_name.toLowerCase().includes(searchQuery)
            );
        }
        return nameVar;
    };

    componentDidMount() {
        this.props.fetchUsers();
    };

    render () {
    
       let filteredUsers = []
       filteredUsers = this.props.users.filter(user => this.userNameFilter(user));

       return( <div><form className="search-bar-form">
        <div className='search-div'>
        <input className="search-bar" type="text" placeholder="Search" onChange={this.searchUpdate("text")} value={`${this.state.query}`} />
        <button className='searchButton'><FontAwesomeIcon className='search-button' icon={faSearch} /></button></div>
        </form>
        <SearchResult users={filteredUsers} /></div>
        );
        
    };
}

export default SearchBar;