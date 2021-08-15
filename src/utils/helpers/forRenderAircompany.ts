import { FlightsType } from '../../mobX/State';
import { sortFromHiLo } from './sortFromHiLo';

export const forRenderAircompany = (arrFlights: FlightsType, sortFilterId: string): [string, string][] => {
    let sortArrFlights: FlightsType = [];
    const setCompany: Set<string> = new Set();
    const mapCompany: Map<string, string> = new Map();

    arrFlights.forEach((el) => {
        setCompany.add(el.flight.legs[0].segments[0].airline.caption);
    });

    sortArrFlights = sortFromHiLo(arrFlights, sortFilterId).reverse();

    setCompany.forEach((unicEl) => {
        sortArrFlights.forEach((el) => {
            if (unicEl === el.flight.legs[0].segments[0].airline.caption) {
                mapCompany.set(unicEl, el.flight.price.total.amount);
            }
        });
    });

    const unicCompany = Array.from(mapCompany);

    return unicCompany;
};
