import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.searchField = '';
    }

    render () {
       return( <form className="search-bar-form">
        <div className='search-div'>
        <input className="search-bar" type="text" placeholder="not implemented yet" />
        <button className='searchButton'><FontAwesomeIcon className='search-button' icon={faSearch} /></button></div>
        </form>);
    };
}

export default SearchBar;