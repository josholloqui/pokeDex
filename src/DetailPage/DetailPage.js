import React from 'react';
import request from 'superagent';
import './Pokemon.css';

class DetailsPage extends React.Component {
    state = {
        pokemon: null
    }

    componentDidMount = async () => {
        const pokeId = this.props.match.params.myPokeId;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokeId}`);

        const pokemon = data.body.results[0]

        this.setState({ pokemon: pokemon})
    }
    render() {
        const { pokemon } = this.state;

        return (
            <main className="detailMain">
                {
                 pokemon
                 ? <section className="detailSection">
                 <h2 className="detailH2">{pokemon.pokemon.charAt(0).toUpperCase() + pokemon.pokemon.slice(1)}</h2>
                 <img className="detailImg" alt={pokemon.url_image} src={pokemon.url_image}/>
                 <div className="detailDiv">
                     <h4>{pokemon.pokemon.charAt(0).toUpperCase() + pokemon.pokemon.slice(1)}'s Stats:</h4>
                     <p className="detailP">Type: {pokemon.type_1}</p>
                     <p className="detailP">Height: {pokemon.height}</p>
                     <p className="detailP">Attack: {pokemon.attack}</p>
                     <p className="detailP">Defense: {pokemon.defense}</p>
                     <p className="detailP">Special-Attack: {pokemon.special_attack}</p>
                     <p className="detailP">Special-Defense: {pokemon.special_defense}</p>
                     <p className="detailP">Speed: {pokemon.speed}</p>
                     <p className="detailP">HP: {pokemon.hp}</p>
                 </div>
             </section>
                : <h1>Pokemon Data Loading</h1>   
                }
            </main>
        );
    }
}
 
export default DetailsPage;