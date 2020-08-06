import React from 'react';

class Header extends React.Component {
    render() { 
        return (
            <header>
                <img className="pokeball" alt="Pokemon Ball" src="pokeball2.png"/>
                <h1>POKEDEX</h1>
            </header>
        );
    }
}
 
export default Header;