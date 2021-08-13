import { makeAutoObservable } from 'mobx';
import { data } from '../../utils/mock/db';

const flights = [...data.result.flights];
export type FlightsType = typeof flights;
export type FlightType = typeof flights[0];

class State {
    flights: FlightsType = [];

    constructor(flights: FlightsType) {
        this.flights = flights;
        makeAutoObservable(this);
    }
}

export default new State(flights);
