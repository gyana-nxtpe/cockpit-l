import { createSlice } from '@reduxjs/toolkit';
import { UserType } from 'common-types';
const initialState = {
    [UserType.MERCHANT]:{
        "mandates":{
            page:0,
            size:10
        },
        "settlements":{
            page:0,
            size:10
        },
        "collections":{
            page:0,
            size:10
        },
        "refunds":{
            page:0,
            size:10
        },
        "audit":{
            page:0,
            size:10
        },
        "collectionDetails":{
            page:0,
            size:10
        },
        "assure":{
            page:0,
            size:10
        },        
        "subscriptions":{
            page:0,
            size:10
        }        
    },
  }

const tablePaginationSlice = createSlice({
  name: 'tablePagination',
  initialState,
  reducers: {
    setTablePagination: (state,action)=>{
        state[action.payload.partnerType][action.payload.type] = action.payload.data
        return state
    }
  }
});

export const { setTablePagination } = tablePaginationSlice.actions;

export const tablePagination = tablePaginationSlice.reducer;
