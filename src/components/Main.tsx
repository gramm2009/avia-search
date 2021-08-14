import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { FlightsType } from '../mobX/State';
import FlyCard from './FlyCard';

type MainPropsType = {
    arrFlightsAfterAllFilters: FlightsType;
};

const Main: React.FC<MainPropsType> = observer(({ arrFlightsAfterAllFilters }) => {
    const [counterShowCard, setCounterShowCard] = useState<number>(2);

    return (
        <div className="main">
            {arrFlightsAfterAllFilters.length ? (
                arrFlightsAfterAllFilters.map((el, i) => {
                    if (i < counterShowCard) {
                        return <FlyCard el={el} key={i} />;
                    }
                })
            ) : (
                <div className="main__no-result">Нет результатов по заданным параметрам</div>
            )}

            {arrFlightsAfterAllFilters.length ? (
                <button className="main__btn" onClick={() => setCounterShowCard((prev) => prev + 2)}>
                    Показать еще
                </button>
            ) : null}
        </div>
    );
});

export default Main;
