import { store } from "state"

let permissionList = {}

export const hasPermission = (val:string | boolean)=>{
  
    if(typeof val === 'boolean') return val
    if(!permissionList || permissionList!== store.getState().auth.permissionList){
        permissionList = {...store.getState().auth.permissionList}
    }
    if(permissionList[val])  return true
    return false
}