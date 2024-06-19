import { createSlice } from '@reduxjs/toolkit';
type Data = {
    name: string,
    totalCollected: string,
    fspTxnFeeCollected: string,
    taxFeeCollected: string,
    fspPlatformFeeCollected: string,
    platformFeeCollected: string,
    totalUnsettled: string,
    nxtpePlatformFeeCollected: string,
    merchantSettlementAmount: string,
    reconciliationAmount:string, 
    wallets:{
        name:string,
        amount:string
    }[],
    currency: string,
    isLoading: boolean
}
export type RevenueAssuranceType = {
    merchants : Data[]
    currentData : Data
}

const revAssuranceSlice= createSlice({
    name: 'revenueAssurance',
    initialState: {
        merchants : [{
            name: "Total",
            totalCollected: "",
            fspTxnFeeCollected: "",
            taxFeeCollected: "",
            fspPlatformFeeCollected: "",
            platformFeeCollected: "",
            totalUnsettled: "",
            nxtpePlatformFeeCollected: "",
            merchantSettlementAmount: "",
            reconciliationAmount:"",
            wallets:[],  
            currency: "",
            isLoading: false
        }],
        currentData:{
            name: "",
            totalCollected: "",
            fspTxnFeeCollected: "",
            taxFeeCollected: "",
            fspPlatformFeeCollected: "",
            platformFeeCollected: "",
            totalUnsettled: "",
            nxtpePlatformFeeCollected: "",
            merchantSettlementAmount: "",
            reconciliationAmount:"",  
            wallets:[],  
            currency: "",
            isLoading: false
        }
    },
    reducers: {
        setRevAssurance: (state,action) => {
            return {...state, currentData:{...state.currentData,...action.payload}}
        },
        setMerchantsList: (state,action) => {
            return {...state, merchants:action.payload}
        }
    },
});

export const { setRevAssurance,setMerchantsList } = revAssuranceSlice.actions;

export const revenueAssurance = revAssuranceSlice.reducer;