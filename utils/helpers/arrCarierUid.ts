import { FlightsType } from './../../src/mobX/State';

export const arrCarierUid = (arrFlights: FlightsType, unicCompaniName: [string, string][]) => {
    let set: Set<string> = new Set();

    unicCompaniName.forEach((name) => {
        arrFlights.forEach((el) => {
            if (name[0] === el.flight.legs[0].segments[0].airline.caption) {
                set.add(el.flight.carrier.uid);
            }
        });
    });

    let newArrayUid = Array.from(set);

    return newArrayUid;
};

