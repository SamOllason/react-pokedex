import React, { useState, useEffect } from 'react';
import Scroll from './Scroll';
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

const headerBarHeight:number = 100;

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
        <div style={{height: `${headerBarHeight}px`}}>
            <div>Pokdedex</div>
        </div>
      <div>

        <div className="fl w-third w-100-m pa2">
            <Scroll>
                <CardList cardClicked={cardClicked} headerBarHeight={headerBarHeight}/>
            </Scroll>
        </div>

        <div className="fl w-two-thirds w-100-m pa2">
          <FocusView pokemon={activePokemon}/>
        </div>

        </div>
    </div>
  );
};

export default App;
