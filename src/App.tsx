import React, { useState, useEffect } from 'react';
import Scroll from './Scroll';
import CardList from './CardList';
import FocusView from './FocusView';
import './App.css';

interface pokeTypeInfo {
    slow: number
    type: { name: string}
}

interface pokeStatInfo {
    base_stat: number
    stat: { name: string; url: string }
}

class Stat {
    value: number;
    name: string;
    constructor(name: string, value: number) {
        this.name  = name;
        this.value = value;
    }
}

export class Pokemon {
  id: number;
  name: string;
  types: Array<string>;
  stats: Array<Stat>;
  constructor(id: number, name: string, pokeTypes: Array<pokeTypeInfo>, pokeStats: Array<pokeStatInfo>) {
    this.id    = id;
    this.name  = name;
    this.types = pokeTypes.map(t => t.type?.name);
    this.stats = pokeStats.map(s => {
        return new Stat(s.stat?.name, s.base_stat)
    });
  }
}

interface AppProps {
  initialQuery: number
}

const headerBarHeight:number = 100;

const App: React.FC<AppProps> = ({initialQuery}) => {

  const [activePokemon, setActivePokemon] =
      useState(new Pokemon(-1, '', [],
          [{base_stat: -1, stat: { name: '', url: '' }}]
      ));
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    async function fetchData() {
      let url = `https://pokeapi.co/api/v2/pokemon/${query}`;
      const response = await fetch(url);
      const data     = await response.json();
      console.log({data});
      const pokemon  = new Pokemon(data.id, data.name, data.types, data.stats);
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
        <div className="bg-red f1 pt1 rotate white" style={{height: `${headerBarHeight}px`}}>
            <code>Pokédex</code>
        </div>

        <div>
            <div className="fl w-third pa2 bg-black-70">
                <Scroll>
                    <CardList cardClicked={cardClicked} headerBarHeight={headerBarHeight}/>
                </Scroll>
            </div>
            <div className="fl w-two-thirds pa2 bg-black-40">
              <FocusView pokemon={activePokemon}/>
            </div>
        </div>
    </div>
  );
};

export default App;
