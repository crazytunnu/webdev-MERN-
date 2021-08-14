const BUY_BAT='BUY_BAT'
export const buyBat=(number)=>{
    return {
        type:BUY_BAT,
        payload:number
    }
}