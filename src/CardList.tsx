import React, {useState, useEffect} from 'react';

interface CardListProps {
    cardClicked: (id: number) => void;
    headerBarHeight: number
}

// Create an array for the first 150 pokemon
const numbers: Array<number> = [];
for(let i = 1; i < 151; i++) {
    numbers.push(i);
}

const CardList: React.FC<CardListProps> = ({cardClicked, headerBarHeight}) => {

    const [containerHeight, setContainerHeight] = useState(800);

    useEffect(() => {
        setContainerHeight(window.innerHeight - headerBarHeight )
    },);

    return (
        <div className="flex flex-column" style={{height: `${containerHeight}px`}}>
            {numbers.map(n => {
                return (
                    <div key={`id--${n}`} className="w-90 pa3 mt1 mb1 shadow-4 br4 bg-near-white" onClick={() => cardClicked(n)}>
                        <img alt={`sprite of pokemon ${n}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`}/>
                    </div>
                )
            })}
        </div>
    )
};

export default CardList;
