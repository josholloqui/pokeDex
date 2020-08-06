import React from 'react';

class Search extends React.Component {
    render() { 
        return (
            <div className="searchDiv">
                <h2>Search the Pokedex</h2>
                <div className="searchBar">
                    <input onChange={this.props.search} placeholder='Enter Pokemon Name...'/>
                    <button onClick={this.props.click}><img className="search" alt='search' src='search.png'/></button>
                </div>
            </div>
        );
    }
}
 
export default Search;