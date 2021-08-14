import { action, makeAutoObservable } from 'mobx';
import { data } from '../../utils/mock/db';

const flights = [...data.result.flights];
export type FlightsType = typeof flights;
export type FlightType = typeof flights[0];

class State {
    flights: FlightsType = [];
    unicCompaniName: [string, string][] = [];

    checkedFilterSortHiLo = 'filter-up-price';
    checkedFilterTransferOne = false;
    checkedFilterTransferDirect = false;
    chehgePriceFrom = '';
    chehgePriceTo = '';
    checkedAirCompany: Array<string> = [];

    constructor(flights: FlightsType) {
        this.flights = flights;
        makeAutoObservable(this);
    }

    chengeFilterSortHiLo(id: string) {
        this.checkedFilterSortHiLo = id;
    }

    chengeFilterTransferOne() {
        this.checkedFilterTransferOne = !this.checkedFilterTransferOne;
    }
    chengeFilterTransferDirect() {
        this.checkedFilterTransferDirect = !this.checkedFilterTransferDirect;
    }

    chengeFilterFrom(price: string) {
        this.chehgePriceFrom = price;
    }

    chengeFilterTo(price: string) {
        this.chehgePriceTo = price;
    }

    unicName(arrUnicName: [string, string][]) {
        action(async () => {
            this.unicCompaniName = arrUnicName;
        })();

        console.log(this.unicCompaniName);
    }

    checkedAirCompanyId(id: string) {
        if (this.checkedAirCompany.includes(id)) {
            action(() => {
                this.checkedAirCompany = this.checkedAirCompany.filter((el) => el !== id);
            })();
        } else {
            action(() => {
                this.checkedAirCompany.push(id);
            })();
        }
    }
}

export default new State(flights);
