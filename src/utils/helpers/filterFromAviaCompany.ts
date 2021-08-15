import { FlightsType } from '../../mobX/State';

export const filterFromAviaCompany = (resPrice: FlightsType, filterAviaCompany: Array<string>): FlightsType => {
    if (filterAviaCompany.length) {
        let newArr: FlightsType = [...resPrice];

        newArr = newArr.filter((el) => {
            if (filterAviaCompany.includes(el.flight.carrier.uid)) return el;
        });

        return newArr;
    }

    return resPrice;
};
