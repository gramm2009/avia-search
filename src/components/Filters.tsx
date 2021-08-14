import { observer } from 'mobx-react-lite';
import React from 'react';
import State from '../mobX/State';

type FiltersPropsType = {
    unicCompaniName: [string, string][];
    filterUnicCompanyName: [string, string][];
    uidCompany: Array<string>;
};

const Filters: React.FC<FiltersPropsType> = observer(({ unicCompaniName, filterUnicCompanyName, uidCompany }) => {
    const sortHiLo = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.id) State.chengeFilterSortHiLo(element.id);
    };

    const filterAviacompany = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.id) State.checkedAirCompanyId(element.id);
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

                <div className="filters__aviacompany" onClick={(e) => filterAviacompany(e)}>
                    {/* ЗДЕСЬ НУЖНО ОТРЕНДЕРИТЬ ПО ФИЛЬТРУ */}
                    <h3>Авиакомпании</h3>

                    {unicCompaniName
                        ? unicCompaniName.map((unicName, i) => {
                              let disabled = true;

                              filterUnicCompanyName.forEach((el) => {
                                  if (unicName[0] === el[0]) disabled = false;
                              });

                              uidCompany;

                              return (
                                  <label key={i}>
                                      <input type="checkbox" disabled={disabled} id={uidCompany[i]} />-{' '}
                                      <p className="filters__aviacompany__name">{unicName[0]}</p> <p>от {unicName[1]} р.</p>
                                  </label>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
});

export default Filters;
