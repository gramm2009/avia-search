import { observer } from 'mobx-react-lite';
import React from 'react';
import State from '../mobX/State';
import FlyCard from './FlyCard';

const Main = observer(() => {
    return (
        <div className="main">
            {State.flights.map((el, i) => (
                <FlyCard el={el} key={i} />
            ))}

            <button>Показать еще</button>
        </div>
    );
});

export default Main;
