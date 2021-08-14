import { FlightsType } from './../../src/mobX/State';

export const filterFromPrice = (resTransfer: FlightsType, filterPriceFrom: string, filterPriceTo: string): FlightsType => {
    if (!filterPriceFrom && !filterPriceTo) return resTransfer;

    let filterFlight: FlightsType = [...resTransfer];
    let newFilterFlight: FlightsType = [];

    newFilterFlight = filterFlight.filter((el) => {
        if (+filterPriceFrom < +el.flight.price.total.amount && +filterPriceTo > +el.flight.price.total.amount) {
            return el;
        }
    });

    console.log(newFilterFlight);

    return newFilterFlight;
};
