import { observer } from 'mobx-react-lite';
import Filters from './components/Filters';
import Main from './components/Main';
import { sortFromHiLo, filterFromTransfer, filterFromPrice, forRenderAircompany, arrCarierUid, filterFromAviaCompany } from '../utils/helpers';
import State, { FlightsType } from './mobX/State';

export const App: React.FC = observer(() => {
    const arrFlights: FlightsType = State.flights;
    let arrFlightsAfterAllFilters: FlightsType = [];

    //сюда собираю все значения фильтров
    const sortFilterId: string = State.checkedFilterSortHiLo;
    const filterTransferOne: boolean = State.checkedFilterTransferOne;
    const filterTransferDirect: boolean = State.checkedFilterTransferDirect;
    const filterPriceFrom: string = State.chehgePriceFrom;
    const filterPriceTo: string = State.chehgePriceTo;
    const filterAviaCompany: Array<string> = State.checkedAirCompany;

    //здесь функции которые фильтруют
    const resHiLo: FlightsType = sortFromHiLo(arrFlights, sortFilterId);
    const resTransfer: FlightsType = filterFromTransfer(resHiLo, filterTransferOne, filterTransferDirect);
    const resPrice: FlightsType = filterFromPrice(resTransfer, filterPriceFrom, filterPriceTo);
    const resAviaCompany: FlightsType = filterFromAviaCompany(resPrice, filterAviaCompany);

    arrFlightsAfterAllFilters = [...resAviaCompany];
    //функция для отрисовки компаний и их фильтра
    const unicCompaniName: [string, string][] = forRenderAircompany(
        arrFlights,
        sortFilterId,
        filterTransferOne,
        filterTransferDirect,
        filterPriceFrom,
        filterPriceTo
    );
    const filterUnicCompanyName: [string, string][] = forRenderAircompany(
        resPrice,
        sortFilterId,
        filterTransferOne,
        filterTransferDirect,
        filterPriceFrom,
        filterPriceTo
    );
    const uidCompany = arrCarierUid(arrFlights, unicCompaniName);

    return (
        <div className="wrapper">
            <Filters unicCompaniName={unicCompaniName} filterUnicCompanyName={filterUnicCompanyName} uidCompany={uidCompany} />
            <Main arrFlightsAfterAllFilters={arrFlightsAfterAllFilters} />
        </div>
    );
});
