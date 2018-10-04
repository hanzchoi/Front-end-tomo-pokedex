import React, { Component } from 'react';
import {Segment, Grid, Image } from 'semantic-ui-react';

import './App.css';

import {pokemons} from './pokemonData';
import UserPokemonContainer from './containers/UserPokemonContainer'
import PokedexContainer from './containers/PokedexContainer';
import Header from './components/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons
    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="app">
        <Header/>

        <Segment basic>
          <Grid>
            <Grid.Row >
              <Grid.Column width={11}>
                <PokedexContainer pokemons={this.state.pokemons}/>
              </Grid.Column>
              <Grid.Column width={5}>
                <UserPokemonContainer userPokemons={this.state.pokemons}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
//
//<PokedexContainer pokemons={this.state.pokemons}/>
//<Segment>
//</Segment>

  // handleChange = () =>{
  //
  // }
  //<PokemonSearch handleChange={this.handleChange}/>
