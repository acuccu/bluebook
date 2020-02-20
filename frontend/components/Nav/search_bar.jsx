import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.searchField = '';
    }

    render () {
       return( <form className="search-bar">
        <input type="text" placeholder="not implemented yet" />
        <button />
        </form>);
    }
}

export default SearchBar;