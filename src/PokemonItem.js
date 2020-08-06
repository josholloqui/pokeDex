import React from 'react';

class PokemonItem extends React.Component {
    render() { 
        return (
            <li>
                <img alt={this.props.pokemon.url_image} src={this.props.pokemon.url_image} />
                <h3>{this.props.pokemon.pokemon.charAt(0).toUpperCase() + this.props.pokemon.pokemon.slice(1)}</h3>
                <p>Attack: {this.props.pokemon.attack} - Defense: {this.props.pokemon.defense}</p>
                <p>Type: {this.props.pokemon.type_1.charAt(0).toUpperCase() + this.props.pokemon.type_1.slice(1)}</p>
            </li>
        );
    }
}
 
export default PokemonItem;