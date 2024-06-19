export const dateFormatter = (obj)=>{
    const NSD = new Date(obj.startDate).getFullYear() +'-'+ (new Date(obj.startDate).getMonth()+1).toString().padStart(2, '0') + '-' + new Date(obj.startDate).getDate().toString().padStart(2, '0')
    const NED = new Date(obj.endDate).getFullYear() +'-'+ (new Date(obj.endDate).getMonth()+1).toString().padStart(2, '0') + '-' + new Date(obj.endDate).getDate().toString().padStart(2, '0')
    return{
        ...obj,
        startDate:NSD,
        endDate:NED
    }
}