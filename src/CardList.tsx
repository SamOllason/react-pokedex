import React from 'react';

interface CardListProps {
    cardClicked: (id: number) => void;
}

const numbers: Array<number> = [ 1, 2, 3, 4, 5];
console.log({numbers});

const CardList: React.FC<CardListProps> = ({cardClicked}) => {
    return (
        <div className="flex flex-column">
            {numbers.map(n => {
                return (
                    <>
                        <div className="outline w-25 pa3 mr2" onClick={() => cardClicked(n)}>
                            <img alt="ditto" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png`}/>
                        </div>
                    </>
                )
            })}
        </div>
    )
};

        // {/*<>*/}
        // {/*    {numbers.map(n => {*/}
        //
        // {/*            return ( <div>*/}
        // {/*                    /!*<img alt="ditto"*!/*/}
        // {/*                    /!*     src={`https://raw.githubusercontent.com/*!/*/}
        // {/*                    /!*     PokeAPI/sprites/master/sprites/pokemon/back/${n}.png`}*!/*/}
        // {/*                    /!*/>*!/*/}
        //
        // {/*                    <div className="flex flex-column">*/}
        // {/*                        <div className="outline w-25 pa3 mr2">*/}
        // {/*                            <code>n</code>*/}
        // {/*                        </div>*/}
        // {/*                    </div>*/}
        // {/*                </div>*/}
        // {/*            )*/}
        // {/*        }*/}
        // {/*    )}*/}
        // {/*</>*/}
    // )



export default CardList;
