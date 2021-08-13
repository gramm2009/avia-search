import { makeAutoObservable } from 'mobx';
import { data } from '../../utils/mock/db';

const flights = [...data.result.flights];
export type FlightsType = typeof flights;
export type FlightType = typeof flights[0];

console.log('Render state');

class State {
    flights: FlightsType = [];
    // filterFlights: FlightsType = []

    checkedFilterSortHiLo = 'filter-up-price';
    checkedFilterTransferOne = false;
    checkedFilterTransferDirect = false;
    chehgePriceFrom = '';
    chehgePriceTo = '';

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
}

export default new State(flights);
