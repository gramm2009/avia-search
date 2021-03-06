import { FlightsType } from '../../mobX/State';

export const sortFromHiLo = (arrFlights: FlightsType, sortFilterId: string): FlightsType => {
    const filterFlight: FlightsType = [...arrFlights];

    if (sortFilterId === 'filter-up-price') {
        filterFlight.sort((prev, next) => +prev.flight.price.total.amount - +next.flight.price.total.amount);
    }
    if (sortFilterId === 'filter-down-price') {
        filterFlight.sort((prev, next) => +next.flight.price.total.amount - +prev.flight.price.total.amount);
    }

    if (sortFilterId === 'filter-duration-time') {
        filterFlight.sort(
            (prev, next) => prev.flight.legs[0].duration + prev.flight.legs[1].duration - (next.flight.legs[0].duration + next.flight.legs[1].duration)
        );
    }

    return filterFlight;
};
