import React from 'react';

class Search extends React.Component {
    render() { 
        return (
            <div>
                <input onChange={this.props.search} />
                <button onClick={this.props.click}>Find</button>
            </div>
        );
    }
}
 
export default Search;