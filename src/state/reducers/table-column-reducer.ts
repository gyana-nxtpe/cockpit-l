import { createSlice } from '@reduxjs/toolkit';
import { UserType } from 'common-types';
import dataMerchant from "../json-data/record_viewer.json"


const tableSlice = createSlice({
  name: 'tableColumns',
  initialState:{
    [UserType.MERCHANT]:dataMerchant,
  },
  reducers: {
    setTableColumns: (state,action)=>{
        state[action.payload.partnerType] = action.payload.data
        return state
    },
    addFiltersList: (state,action)=>{
      Object.keys(action.payload.data).forEach((key)=>{ //maps through filters received from api in actions     
        state[action.payload.partnerType][key].forEach((col)=>{ //maps through columns of desired rv
          const x = Object.keys(action.payload.data[key]) 
          if(x.includes(col.key)){ //checks if current column has filters
            col['filtersList'] = action.payload.data[key][col.key] //allots array of filter to columns
          }
        })
      })
      return state;
    },
    clearSearch : (state,action)=>{
      return state[action.payload.partnerType][action.payload.type].forEach((x)=>{
        if(!x.isFilterAllowed)
        return x.filter=''
      })
    },
    clearFilters : (state,action)=>{
      return state[action.payload.partnerType][action.payload.type].forEach((x)=>{
        if(x.isFilterAllowed)
        return x.filter=''
      })
    }
  }
});

export const { setTableColumns,clearFilters,clearSearch,addFiltersList } = tableSlice.actions;

export const tableColumns = tableSlice.reducer;
