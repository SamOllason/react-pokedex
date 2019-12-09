import React from 'react';
import { Pokemon } from './App';

interface FocusViewProps {
    pokemon: Pokemon
}

const FocusView: React.FC<FocusViewProps> = ({pokemon}) => {
    return (
        <>
            {pokemon.name}
            <img alt="ditto" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
        </>
    )
};

export default FocusView;
