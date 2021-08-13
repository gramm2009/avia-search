import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import State from '../mobX/State';
import FlyCard from './FlyCard';

const Main = observer(() => {
    const [counterShowCard, setCounterShowCard] = useState<number>(2);
    console.log(counterShowCard);

    return (
        <div className="main">
            {State.flights.map((el, i) => {
                if (i < counterShowCard) {
                    return <FlyCard el={el} key={i} />;
                }
            })}
            {/* { State.flights.map( ( el, i ) => (
                <FlyCard el={ el } key={ i } />
            ) ) } */}

            <button className="main__btn" onClick={() => setCounterShowCard((prev) => prev + 2)}>
                Показать еще
            </button>
        </div>
    );
});

export default Main;
