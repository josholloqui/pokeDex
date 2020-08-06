import React from 'react';
import request from 'superagent';
import Header from './Header.js';
import './App.css';
import Search from './Search.js';
import PokemonList from './PokemonList.js';

class App extends React.Component {
  state = {
    search: '',
    isLoading: 'false',
    pokeState: []
  }

  componentDidMount = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=801`);
    this.setState({pokeState: data.body.results})
  }

  handleSubmit = async () => {
    this.setState({isLoading: true})
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=801&pokemon=${this.state.search}`);

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })
  }

  searchValue = (e) => this.setState({ search: e.target.value})

  render() { 
    return (
      <body>
        <Header />
        <main>
          <Search search={this.searchValue} click={this.handleSubmit} />
          {console.log(this.state.pokeState)}
          <PokemonList pokemons={this.state.pokeState} />
        </main>
      </body>
    );
  }
}
 
export default App;