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
    pokeState: [],
    currentPage: 1,
    totalPages: 1
    
  }

  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);

    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');

    if(searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search
      });
    }

    this.makeRequest()
  }

  makeRequest = async () => {
    this.setState({ isLoading: true });

    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

    await this.setState({
      pokeState: data.body.results,
      totalPages: Math.ceil(data.body.count / 20),
      isLoading: false
    })

    const params = new URLSearchParams(this.props.location.search);

    params.set('search', this.state.search);
    params.set('searchBy', this.state.searchBy);
    params.set('page', this.state.currentPage);

    this.props.history.push('?' + params.toString())
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.setState({
      currentPage: 1
    })
    await this.makeRequest()
  }

  handlePrev = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) - 1})

    await this.makeRequest();
  }

  handleNext = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) + 1})

    await this.makeRequest();
  }

  searchValue = (e) => this.setState({ search: e.target.value})

  searchParams = (e) => this.setState({ searchBy: e.target.value })

  render() { 
    const {
      pokeState,
      currentPage,
      totalPages
    } = this.state;
    return (
      <body>
        <main>
          <form onSubmit={this.handleSubmit}>
            <Search search={this.searchValue} click={this.handleSubmit} searchBy={this.searchParams} inputValue={this.state.search}/>
          </form>
          <PokemonList pokemons={pokeState} handlePrev={this.handlePrev} handleNext={this.handleNext} currentPage={currentPage} totalPages={totalPages}/>
        </main>
      </body>
    );
  }
}
 
export default App;