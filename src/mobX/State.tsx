import { makeAutoObservable } from 'mobx';
import { data } from '../../utils/mock/db';

const flights = data.result.flights;
type Flights = typeof flights;

class State {
    flights: Flights = [];

    constructor(flights: Flights) {
        this.flights = flights;
        makeAutoObservable(this);
    }
}

export default new State(flights);
