import { createSlice } from '@reduxjs/toolkit';

const notifSlice = createSlice({
    name: 'notif',
    initialState: {
        duration:2,
        type:"error",
        dismissible:true,
        content:""
    },
    reducers: {
        setNotif: (state, action) => {
            state = action.payload
            return state
        }
    },
});

export const { setNotif } = notifSlice.actions;
export const notif = notifSlice.reducer;