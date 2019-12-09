import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import FocusView from './FocusView';
import './App.css';

export interface pokemonInfo {
  name: string,
  num: number
}

export class Pokemon {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name
  }
}

interface AppProps {
  initialQuery: number
}

const App: React.FC<AppProps> = ({initialQuery}) => {

  const [activePokemon, setActivePokemon] = useState(new Pokemon(initialQuery, 'Bulbasaur'));
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    async function fetchData() {
      let url = `https://pokeapi.co/api/v2/pokemon/${query}`;
      const response = await fetch(url);
      const data     = await response.json();
      const pokemon  = new Pokemon(data.id, data.name);
      setActivePokemon(pokemon);
    }

    fetchData()
  },[query]);


  const cardClicked = (id: number) => {
    // setting state will cause app to render which will cause the effect to be run
    setQuery(id)
  };

  return (
    <div className="tc">
      <p>Pokdedex</p>
      <div>
        <div className="fl w-two-thirds pa2">
          <CardList cardClicked={cardClicked}/>
        </div>
        <div className="fl w-third pa2">
          <FocusView pokemon={activePokemon}/>
        </div>
        </div>
    </div>
  );
};

export default App;
