import { FlightsType } from '../../src/mobX/State';


export const sortFromHiLo = (
    arrFlights:FlightsType,
    sortFilterId:string
    ):FlightsType => {
    
    let filterFlight:FlightsType=[...arrFlights]
    
    if (sortFilterId === 'filter-up-price') {
        filterFlight = filterFlight.sort((prev, next) => +prev.flight.price.total.amount - +next.flight.price.total.amount);
    }
    if (sortFilterId === 'filter-up-down') {
        filterFlight = filterFlight.sort((prev, next) => +next.flight.price.total.amount - +prev.flight.price.total.amount);
    }

    if (sortFilterId === 'filter-duration-time') {
        filterFlight = filterFlight.sort(
            (prev, next) => prev.flight.legs[0].duration + prev.flight.legs[1].duration - (next.flight.legs[0].duration + next.flight.legs[1].duration)
        );
    }
    
    return filterFlight
};
