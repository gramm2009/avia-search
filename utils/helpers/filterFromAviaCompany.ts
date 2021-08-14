import { FlightsType } from './../../src/mobX/State';

export const filterFromAviaCompany = (resPrice: FlightsType, filterAviaCompany: Array<string>): FlightsType => {
    

    if(filterAviaCompany.length){
        
        let newArr: FlightsType = [...resPrice];
        
        newArr = newArr.filter(el=>{
            if(filterAviaCompany.includes(el.flight.carrier.uid)) return el
            //если юид из елемента содержится в масиве фильтров по авиакомпаниям
            //то вернуть елемент
        })
        
        return newArr;
    }
    
    return resPrice;
};
