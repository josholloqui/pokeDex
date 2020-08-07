import React from 'react';
import request from 'superagent';
import './App.css';
import Search from './Search.js';
import PokemonList from './PokemonList.js';

class App extends React.Component {
  state = {
    search: '',
    searchBy: 'pokemon',
    isLoading: 'false',
    pokeState: []
    
  }

  componentDidMount = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=801`);
    this.setState({pokeState: data.body.results})
  }

  handleSubmit = async () => {
    this.setState({isLoading: true})
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=801&${this.state.searchBy}=${this.state.search}`);

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })
  }

  searchValue = (e) => this.setState({ search: e.target.value})

  searchParams = (e) => this.setState({ searchBy: e.target.value })

  render() { 
    return (
      <body>
        <main>
          <Search search={this.searchValue} click={this.handleSubmit} searchBy={this.searchParams}/>
          <PokemonList pokemons={this.state.pokeState} />
        </main>
      </body>
    );
  }
}
 
export default App;