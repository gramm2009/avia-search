import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import State, { FlightsType } from '../mobX/State';
import FlyCard from './FlyCard';
import { sortFromHiLo } from '../../utils/helpers/sortFromHiLo';
import { filterFromTransfer } from '../../utils/helpers/filterFromTransfer';
import { filterFromPrice } from '../../utils/helpers/filterFromPrice';

const Main = observer(() => {
    const [counterShowCard, setCounterShowCard] = useState<number>(2);

    const arrFlights: FlightsType = State.flights;

    //сюда собираю все значения фильтров
    const sortFilterId: string = State.checkedFilterSortHiLo;
    const filterTransferOne: boolean = State.checkedFilterTransferOne;
    const filterTransferDirect: boolean = State.checkedFilterTransferDirect;
    const filterPriceFrom: string = State.chehgePriceFrom;
    const filterPriceTo: string = State.chehgePriceTo;

    //здесь функции которые фильтруют
    const resHiLo: FlightsType = sortFromHiLo(arrFlights, sortFilterId);
    const resTransfer: FlightsType = filterFromTransfer(resHiLo, filterTransferOne, filterTransferDirect);
    const resPrice: FlightsType = filterFromPrice(resTransfer, filterPriceFrom, filterPriceTo);

    return (
        <div className="main">
            {resPrice.length ? (
                resPrice.map((el, i) => {
                    if (i < counterShowCard) {
                        return <FlyCard el={el} key={i} />;
                    }
                })
            ) : (
                <div className="main__no-result">Нет результатов по заданным параметрам</div>
            )}

            {resPrice.length ? (
                <button className="main__btn" onClick={() => setCounterShowCard((prev) => prev + 2)}>
                    Показать еще
                </button>
            ) : null}
        </div>
    );
});

export default Main;
