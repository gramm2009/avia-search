import { observer } from 'mobx-react-lite';
import React from 'react';
import State, { FlightsType } from '../mobX/State';

const Filters = observer(() => {
    const flights: FlightsType = State.flights;
    const SetCompany: Set<string> = new Set();

    flights.forEach((el) => {
        SetCompany.add(el.flight.legs[0].segments[0].airline.caption);
    });
    // let arrCompany:Array<string> =Array.from(SetCompany)

    console.log(SetCompany);

    const sortHiLo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.id) State.chengeFilterSortHiLo(element.id);
    };

    return (
        <div className="filters">
            <div className="filters__heder"></div>

            <div className="filters-container">
                <div className="filters__hi-lo" onClick={(e) => sortHiLo(e)}>
                    <h3>Сортировать</h3>
                    <label>
                        <input type="radio" name="hiLo" id="filter-up-price" defaultChecked={true} />- по возрастанию цены
                    </label>
                    <label>
                        <input type="radio" name="hiLo" id="filter-down-price" />- по убыванию цене
                    </label>
                    <label>
                        <input type="radio" name="hiLo" id="filter-duration-time" />- по времени в пути
                    </label>
                </div>

                <div className="filters__transfer">
                    <h3>Фильтровать</h3>
                    <label>
                        <input type="checkbox" id="one-transfer" onClick={() => State.chengeFilterTransferOne()} />- 1 пересадка
                    </label>
                    <label>
                        <input type="checkbox" id="direct" onClick={() => State.chengeFilterTransferDirect()} />- без пересадок
                    </label>
                </div>

                <div className="filters__price">
                    <h3>Цена</h3>
                    <label>
                        <span>От</span>
                        <input type="text" onChange={(e) => State.chengeFilterFrom(e.target.value)} />
                    </label>
                    <label>
                        <span>До</span>
                        <input type="text" onChange={(e) => State.chengeFilterTo(e.target.value)} />
                    </label>
                </div>

                <div className="filters__aviacompany">
                    {/* ЗДЕСЬ НУЖНО ОТРЕНДЕРИТЬ ПО ФИЛЬТРУ */}
                    <h3>Авиакомпании</h3>

                    <label>
                        <input type="checkbox" />- <p className="filters__aviacompany__name">LOT Polish Airlines</p> <p>от 21049 р.</p>
                    </label>
                    <label>
                        <input type="checkbox" />- <p className="filters__aviacompany__name">Аэрофлот - российские</p> <p>от 31733 р.</p>
                    </label>
                </div>
            </div>
        </div>
    );
});

export default Filters;
