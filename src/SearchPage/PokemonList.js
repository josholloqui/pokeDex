import React from 'react';
import PokemonItem from './PokemonItem.js';

class PokemonList extends React.Component {
    render() { 
        return (
            <section>
                <ul>
                    {this.props.pokemons.map(pokemon => <PokemonItem pokemon={pokemon} />)}
                </ul>
            </section>
        );
    }
}
 
export default PokemonList;