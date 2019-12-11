import React from 'react';
import { Pokemon } from './App';

interface FocusViewProps {
    pokemon: Pokemon
}

const FocusView: React.FC<FocusViewProps> = ({pokemon}) => {
    return (
        <div className="flex flex-column bg-white br4 pa4">
            <div>
                <img alt={`sprite of ${pokemon.name}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
            </div>

            <div>
                <h1>{pokemon.name}</h1>
            </div>

            <div>
                <h2>Types</h2>
                    {pokemon.types.map(t => {
                        return (<div key={`id--type--${pokemon.name}-${t}`}>{t}</div>)
                    })}

            </div>

            <div>
                <h2>Stats</h2>
                {pokemon.stats.map(s => {
                    return (
                        <div key={`id--stat--${pokemon.name}-${s.name}`}>{s.name} : {s.value}</div>
                    )
                })}
            </div>
        </div>
    )
};

export default FocusView;
