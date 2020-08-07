import React from 'react';
import { Link } from 'react-router-dom';

class PokemonItem extends React.Component {
    render() { 
        const {
            pokemon: {
                pokemon,
                url_image,
                attack,
                defense,
                type_1
            }
        } = this.props;

        return (
            <li>
                <Link to={`/detail/${pokemon}`} style={ {textDecoration: 'none'} } >
                    <img alt={url_image} src={url_image} />
                    <h3>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</h3>
                    <p>Attack: {attack} - Defense: {defense}</p>
                    <p>Type: {type_1.charAt(0).toUpperCase() + type_1.slice(1)}</p>
                </Link>
            </li>
        );
    }
}
 
export default PokemonItem;