import React from 'react';

class Header extends React.Component {
    render() { 
        return (
            <div className="headerDiv">
                <img className="pokeball" alt="Pokemon Ball" src="pokeball2.png"/>
                <h1>POKEDEX</h1>
            </div>
        );
    }
}
 
export default Header;