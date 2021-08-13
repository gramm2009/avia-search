import { FlightsType,FlightType } from './../../src/mobX/State';

export const filterFromTransfer=(
    resHiLo:FlightsType,
    filterTransferOne:boolean,
    filterTransferDirect:boolean
    ):FlightsType=>{
        
    let filterFlight:FlightsType=[...resHiLo]
    let transferOne:FlightsType =[]
    let transferDirect:FlightsType =[]
    let newFilterFlight:FlightsType = []
    
    const transfer =(el:FlightType):number=>{
        let transfer: number = 0;
        let transferBack: number = 0;
    
        if (el.flight.legs[0].segments.length === 2) {
            transfer = 1;
        } else {
            transfer = 0;
        }
    
        if (el.flight.legs[1].segments.length === 2) {
            transferBack = 1;
        } else {
            transferBack = 0;
        }
        
        return transfer + transferBack
    }
    
    if(!filterTransferOne && !filterTransferDirect) return filterFlight
    
    if(filterTransferOne){
        transferOne = filterFlight.filter(el=>{
            const totalTransfer:number = transfer(el)
            if(totalTransfer===1) return el
        })
    } 
    
    if(filterTransferDirect){
        transferDirect = filterFlight.filter(el=>{
            const totalTransfer:number = transfer(el)
            if(totalTransfer===0) return el
        })
    } 
    
    newFilterFlight=[...transferOne, ...transferDirect]

    
    return newFilterFlight
}



