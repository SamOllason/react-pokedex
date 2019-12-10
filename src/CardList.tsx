import React, {useState, useEffect} from 'react';

interface CardListProps {
    cardClicked: (id: number) => void;
    headerBarHeight: number
}

const numbers: Array<number> = [];
for(let i = 1; i < 151; i++) {
    numbers.push(i);
}
// const numbers: Array<number> = new Array(150).map((u,i) => i + 1);
console.log({numbers});

const margin: number = 30;

const CardList: React.FC<CardListProps> = ({cardClicked, headerBarHeight}) => {

    const [containerHeight, setContainerHeight] = useState(800);

    useEffect(() => {
        setContainerHeight(window.innerHeight - headerBarHeight - margin)
    },);

    return (
        <div className="flex flex-column" style={{height: `${containerHeight}px`}}>
            {numbers.map(n => {
                return (
                    <>
                        <div className="outline w-100 pa3 mr2" onClick={() => cardClicked(n)}>
                            <img alt={`sprite of pokemon ${n}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`}/>
                        </div>
                    </>
                )
            })}
        </div>
    )
};

export default CardList;
