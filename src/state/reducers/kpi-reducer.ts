import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'kpiData',
    // merchnat
    initialState: {
        'activeMandates': {
         "currentValue":"90",
         "previousValue":"As on May 28 - 64",
         "percentChange": "28.88 %",
         "changeDirection": "UP",
         "changeType":"POSITIVE"
     },
        'newMandatesAdded': {
         "currentValue":"31",
         "previousValue":"LMTD - 28",
         "percentChange": "10.71 %",
         "changeDirection": "UP",
         "changeType":"POSITIVE"
     },
        'totalMandatesDeactivated': {
         "currentValue":"9",
         "previousValue":"LMTD - 6",
         "percentChange": "10.3 %",
         "changeDirection": "UP",
         "changeType":"Negative"
     },
        'totalSettled': {
         "currentValue":"UGX1.44 M",
         "previousValue":"LMTD - UGX 1.18M",
         "percentChange": "21.75 %",
         "changeDirection": "UP",
         "changeType":"POSITIVE"
     },
        'balanceDues': {
         "currentValue":"0",
         "previousValue":"",
         "percentChange": "",
         "changeDirection": "",
         "changeType":""
     },
        'totalCollections': {
         "currentValue":"UGX1.47 M",
         "previousValue":"LMTD - 1.21 M",
         "percentChange": "21.75 %",
         "changeDirection": "UP",
         "changeType":"POSITIVE"
     },
        'renewalSuccessRate': {
         "currentValue":"92.13%",
         "previousValue":"LMTD - 90.14%",
         "percentChange": "2.21 %",
         "changeDirection": "UP",
         "changeType":"POSITIVE"
     },
        'averageDelayInRenewals': {
         "currentValue":"0.42 Days",
         "previousValue":"LMTD - 0.5 Days",
         "percentChange": "-26.6 %",
         "changeDirection": "UP",
         "changeType":"POSITIVE"
     },
        'refundRequests': {
         "currentValue":"UGX34237",
         "previousValue":"LMTD - UGX 22739.5",
         "percentChange": "50.56 %",
         "changeDirection": "UP",
         "changeType":"NEGATIVE"
     },
        'refundPending': {
         "currentValue":"0",
         "previousValue":"",
         "percentChange": "",
         "changeDirection": "",
         "changeType":""
     },
     },
    //  ToDo Wallet user kpi data handle
    // wallet
    // initialState: {
    //     'activeMandates': {
    //         "currentValue": "290",
    //         "previousValue": "As on May 28 - 64",
    //         "percentChange": "28.88 %",
    //         "changeDirection": "UP",
    //         "changeType": "POSITIVE"
    //     },
    //     'renewalSuccessRate': {
    //         "currentValue": "31",
    //         "previousValue": "LMTD - 28",
    //         "percentChange": "10.71 %",
    //         "changeDirection": "UP",
    //         "changeType": "POSITIVE"
    //     },
    //     'avgDelayRenewal': {
    //         "currentValue": "9",
    //         "previousValue": "LMTD - 6",
    //         "percentChange": "10.3 %",
    //         "changeDirection": "UP",
    //         "changeType": "Negative"
    //     },
    //     'totalActiveUsers': {
    //         "currentValue": "29.72 K",
    //         "previousValue": "LMTD - UGX 1.18M",
    //         "percentChange": "21.75 %",
    //         "changeDirection": "UP",
    //         "changeType": "POSITIVE"
    //     },
    //     'arpuPerMonth': {
    //         "currentValue": "0",
    //         "previousValue": "",
    //         "percentChange": "",
    //         "changeDirection": "",
    //         "changeType": ""
    //     },
    //     'totalTransactionValue': {
    //         "currentValue": "UGX123.47 K ",
    //         "previousValue": "LMTD - 1.21 M",
    //         "percentChange": "21.75 %",
    //         "changeDirection": "UP",
    //         "changeType": "POSITIVE"
    //     },
    //     'totalTransactionCount': {
    //         "currentValue": "92.13%",
    //         "previousValue": "LMTD - 90.14%",
    //         "percentChange": "2.21 %",
    //         "changeDirection": "UP",
    //         "changeType": "POSITIVE"
    //     },
    //     'totalRevenueCollected': {
    //         "currentValue": "0.42 Days",
    //         "previousValue": "LMTD - 0.5 Days",
    //         "percentChange": "-26.6 %",
    //         "changeDirection": "UP",
    //         "changeType": "POSITIVE"
    //     },
    //     'refundRequested': {
    //         "currentValue": "34.25",
    //         "previousValue": "LMTD - UGX 1239.5",
    //         "percentChange": "50.56 %",
    //         "changeDirection": "UP",
    //         "changeType": "NEGATIVE"
    //     },
    //     'refundPending': {
    //         "currentValue": "2",
    //         "previousValue": "",
    //         "percentChange": "",
    //         "changeDirection": "",
    //         "changeType": ""
    //     },
    // },
    reducers: {
        setKpiData: (state, action) => {
            state = action.payload
            return state
        },
    },
});

export const { setKpiData } = authSlice.actions;

export const kpiData = authSlice.reducer;
