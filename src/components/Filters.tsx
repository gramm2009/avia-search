import React from 'react';

export default function Filters() {
    return (
        <div className="filters">
            <div className="filters__heder"></div>

            <div className="filters-container">
                <div className="filters__hi-lo">
                    <h3>Сортировать</h3>
                    <label>
                        <input type="radio" name="hiLo" />- по возрастанию цены
                    </label>
                    <label>
                        <input type="radio" name="hiLo" />- по убыванию цене
                    </label>
                    <label>
                        <input type="radio" name="hiLo" />- по времени в пути
                    </label>
                </div>

                <div className="filters__transfer">
                    <h3>Фильтровать</h3>
                    <label>
                        <input type="checkbox" />- 1 пересадка
                    </label>
                    <label>
                        <input type="checkbox" />- без пересадок
                    </label>
                </div>

                <div className="filters__price">
                    <h3>Цена</h3>
                    <label>
                        <span>От</span> <input type="text" />
                    </label>
                    <label>
                        <span>До</span> <input type="text" />
                    </label>
                </div>

                <div className="filters__aviacompany">
                    {/* ЗДЕСЬ НУЖНО ОТРЕНДЕРИТЬ ПО ФИЛЬТРУ */}
                    <h3>Авиакомпании</h3>
                    <label>
                        <input type="checkbox" />- <p className="filters__aviacompany__name">LOT Polish Airlines</p> <p>от 21049 р.</p>
                    </label>
                    <label>
                        {' '}
                        <input type="checkbox" />- <p className="filters__aviacompany__name">Аэрофлот - российские</p> <p>от 31733 р.</p>
                    </label>
                </div>
            </div>
        </div>
    );
}
