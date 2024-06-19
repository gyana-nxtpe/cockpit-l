import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'
import { clearResults,  setNotif } from './reducers'
// redirectTo404

let count = 0;

export const resetCount = () => {
    count = 0;
}

export const rtkQueryErrorLogger: Middleware =
    () => (next) => (action) => {
        if (isRejectedWithValue(action) && action.type !== "partnerTheme/executeQuery/rejected") {
            next(setNotif({
                type:"error",
                duration:5,
                dismissible:false,
                content:action.payload?.data?.detail || "Something went wrong !"
            }))
            if (action.payload.status === 401 && count === 0) {
                count++;
                return next(clearResults())
            }
            // else if(action.type === "partnerTheme/executeQuery/rejected"){
            //     return next(redirectTo404())
            // }
        }
        return next(action)
    }

