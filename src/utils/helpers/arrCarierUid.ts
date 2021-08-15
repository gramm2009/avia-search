import { FlightsType } from '../../mobX/State';

export const arrCarierUid = (arrFlights: FlightsType, unicCompaniName: [string, string][]) => {
    const set: Set<string> = new Set();

    unicCompaniName.forEach((name) => {
        arrFlights.forEach((el) => {
            if (name[0] === el.flight.legs[0].segments[0].airline.caption) {
                set.add(el.flight.carrier.uid);
            }
        });
    });

    const newArrayUid = Array.from(set);

    return newArrayUid;
};
