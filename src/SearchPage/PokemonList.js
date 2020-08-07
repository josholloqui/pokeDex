import React from 'react';
import PokemonItem from './PokemonItem.js';

class PokemonList extends React.Component {
    render() { 
        const {
            pokemons,
            handlePrev,
            handleNext,
            currentPage,
            totalPages 
        } = this.props;
        return (
            <section>
                {
                    pokemons.length > 0 && <div>
                        {
                            Number(currentPage) !== 1 && <button onClick={handlePrev}>Prev</button>
                        }{
                            Number(currentPage) !== Number(totalPages) && <button onClick={handleNext}>Next</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }
                <ul>
                    {pokemons.map(pokemon => <PokemonItem pokemon={pokemon} />)}
                </ul>
            </section>
        );
    }
}
 
export default PokemonList;