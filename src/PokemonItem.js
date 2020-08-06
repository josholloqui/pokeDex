import React from 'react';

class PokemonItem extends React.Component {
    render() { 
        return (
            <li>
                <img alt={this.props.pokemon.url_image} src={this.props.pokemon.url_image} />
                <h3>{this.props.pokemon.pokemon.charAt(0).toUpperCase() + this.props.pokemon.pokemon.slice(1)}</h3>
            </li>
        );
    }
}
 
export default PokemonItem;