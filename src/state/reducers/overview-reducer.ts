import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../common-types';
import { ChartType, WidgetBlock } from '../types';

const fetchDate=()=>{
    // Initial date of Current Month
    const currentDate = new Date();
    const LastMonthCurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, currentDate.getUTCDate())
    return {LastMonthCurrentDate}
  }

const initialState: WidgetBlock = {
    [UserType.MERCHANT]: [
        {
            "title": "mandates",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Active Mandates",
                    "id": "activeMandates",
                    'permission': "mandate#view_KPI_active_mandates",
                    'lmtdLabel': `As on ${fetchDate().LastMonthCurrentDate.toLocaleString('en-us',{month:'short'})} ${fetchDate().LastMonthCurrentDate.getDate()}`,
                    "data": {}
                },
                {
                    "title": "New Mandates Added",
                    "id": "newMandatesAdded",
                    'permission': "mandate#view_KPI_new_mandates_added",
                    'lmtdLabel': "LMTD",
                    "data": {}

                },
                {
                    "title": "Mandates Deactivated",
                    "id": "totalMandatesDeactivated",
                    'permission': "mandate#view_KPI_total_mandates_deactivated",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        
        {
            "title": "settlements",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Total Settled",
                    "id": "totalSettled",
                    'permission': "settlement#view_KPI_total_settled",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "Balance Due",
                    "id": "balanceDues",
                    'permission': "settlement#view_KPI_balance_due",
                    'lmtdLabel': "LMTD",
                    "data": {}

                },
            ]
        },
        {
            "title": "collections",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {

                    "title": "Total Collections",
                    "id": "totalCollections",
                    'permission': "collections#view_KPI_total_collections",
                    'lmtdLabel': "LMTD",
                    "data": {}

                },
                {
                    "title": "renewal success rate",
                    "id": "renewalSuccessRate",
                    'permission': "collections#view_KPI_renewal_success_rate",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "Avg delay in Renewals",
                    "id": "averageDelayInRenewals",
                    'permission': "collections#view_KPI_average_renewal_delay",
                    'lmtdLabel': "LMTD",
                    "data": {}

                }
            ]
        },
        {
            "title": "refunds",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Refund Requests",
                    "id": "refundRequests",
                    'permission': "refunds#view_KPI_refund_requested",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "Refund Pending",
                    "id": "refundPending",
                    'permission': "refunds#view_KPI_refunds_pending",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        
        
        
    ],
    "ReCollect": [
        //re collect
        {
            "title":"Subscription Gross Adds",
            "chartType":ChartType.MTDvsLMTD,
            "kpis":[
                {
                    "title": "Today",
                    "id": "subscriptionGaFtd",
                    'permission': "subscriptions#view_KPI_subscription_ga_till_date",
                    'lmtdLabel': `As on ${fetchDate().LastMonthCurrentDate.toLocaleString('en-us',{month:'short'})} ${fetchDate().LastMonthCurrentDate.getDate()}`,
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "subscriptionGaTillDate",
                    'permission': "subscriptions#view_KPI_subscription_ga_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Subscription Gross Adds",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "subscriptionGaDaywise",
                    'permission': "subscriptions#view_KPI_subscription_ga_daywise",
                }
            ]
        },
        {
            "title":"Subscription Split",
            "chartType": ChartType.SPLIT,
            "kpis":[
                {
                    "id": "subscriptionGaSplit",
                    'permission': "subscriptions#view_KPI_subscription_ga_split",
                }
                
            ]
        },
        {
            "title":"Subscription Gross Adds Collections",
            "chartType":ChartType.MTDvsLMTD,
            "kpis":[
                {
                    "title": "Today",
                    "id": "subscriptionGaCollectionsFtd",
                    'permission': "subscriptions#view_KPI_subscription_ga_collections_ftd",
                    'lmtdLabel': `As on ${fetchDate().LastMonthCurrentDate.toLocaleString('en-us',{month:'short'})} ${fetchDate().LastMonthCurrentDate.getDate()}`,
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "subscriptionGaCollectionsTillDate",
                    'permission': "subscriptions#view_KPI_subscription_ga_collections_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Subscription Gross Adds Collections",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "subscriptionGaCollectionsDaywise",
                    'permission': "subscriptions#view_KPI_subscription_ga_collections_daywise",
                }
            ]
        },
        
        {
            "title":"GA Collection Split",
            "chartType": ChartType.SPLIT,
            "kpis":[
                {
                    "id": "subscriptionGaCollectionsSplit",
                    'permission': "subscriptions#view_KPI_subscription_ga_collections_split",
                }
                
            ]
        },
        {
            "title":"Active Subscriptions",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "activeSubscriptions",
                    'permission': "subscriptions#view_KPI_active_subscriptions",
                }
            ]
        },
        {
            "title":"Subscriptions Base",
            "chartType":ChartType.MTDvsLMTD,
            "kpis":[
                {
                    "title": "Active Subscriptions",
                    "id": "activeSubscriptionPitVsSom",
                    'permission': "subscriptions#view_KPI_active_subscription_pit_vs_som",
                    'lmtdLabel': `As on ${fetchDate().LastMonthCurrentDate.toLocaleString('en-us',{month:'short'})} ${fetchDate().LastMonthCurrentDate.getDate()}`,
                    "data": {}
                },
                {
                    "title": "Subscriptions Churn",
                    "id": "subscriptionChurn",
                    'permission': "subscriptions#view_KPI_subscription_churn",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "Subscription Net Adds",
                    "id": "subscriptionNetAdds",
                    'permission': "subscriptions#view_KPI_subscription_net_adds",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Renewal on Due Date ",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "renewalsDaywise",
                    'permission': "subscriptions#view_KPI_renewals_daywise",
                }
            ]
        },
        {
            "title": "subscription renewals",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Renewal on Due Date",
                    "id": "renewalsOnDueDate",
                    'permission': "subscriptions#view_KPI_renewals_on_due_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "Average Active Days",
                    "id": "avgActiveDays",
                    'permission': "subscriptions#view_KPI_avg_active_days",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "Upcoming Renewals Due",
                    "id": "totalRenewalsDue",
                    'permission': "subscriptions#view_KPI_total_renewals_due",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        }
    ],
    "RideCollect":[
        //ride collect

        {
            "title": "total rides",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "totalRidesFtd",
                    'permission': "rides#view_KPI_total_rides_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "totalRidesTillDate",
                    'permission': "rides#view_KPI_total_rides_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Total Rides",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "totalRidesDaywise",
                    'permission': "rides#view_KPI_total_rides_daywise",
                }
            ]
        },
        {
            "title": "total collections",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "totalRideCollectionsFtd",
                    'permission': "rides#view_KPI_total_ride_collections_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "totalRideCollectionsTillDate",
                    'permission': "rides#view_KPI_total_ride_collections_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Total Collections",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "totalRideCollectionsDaywise",
                    'permission': "rides#view_KPI_total_ride_collections_daywise",
                }
            ]
        },
        {
            "title": "Avg Collection/Ride",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "avgCollectionPerRideFtd",
                    'permission': "rides#view_KPI_avg_collection_per_ride_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "avgCollectionPerRideTillDate",
                    'permission': "rides#view_KPI_avg_collection_per_ride_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Collection/Ride",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "avgCollectionPerRideDaywise",
                    'permission': "rides#view_KPI_avg_collection_per_ride_daywise",
                }
            ]
        },
        {
            "title": "Avg Ride Time",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "avgRideTimeFtd",
                    'permission': "rides#view_KPI_avg_ride_time_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "avgRideTimeTillDate",
                    'permission': "rides#view_KPI_avg_ride_time_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Ride Time",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "avgRideTimeDaywise",
                    'permission': "rides#view_KPI_avg_ride_time_daywise",
                }
            ]
        },
        {
            "title": "active customers",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "activeCustomersFtd",
                    'permission': "rides#view_KPI_active_customers_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "activeCustomersTillDate",
                    'permission': "rides#view_KPI_active_customers_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"active customers",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "activeCustomersDaywise",
                    'permission': "rides#view_KPI_active_customers_daywise",
                }
            ]
        },
        {
            "title": "Avg Collection/Customer",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "avgCollectionPerCustomerFtd",
                    'permission': "rides#view_KPI_avg_collection_per_customer_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "avgCollectionPerCustomerTillDate",
                    'permission': "rides#view_KPI_avg_collection_per_customer_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Collection/Customer",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "avgCollectionsPerCustomerDaywise",
                    'permission': "rides#view_KPI_avg_collections_per_customer_daywise",
                }
            ]
        },
        {
            "title": "Avg Rides/Customer",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "avgRidesPerCustomerFtd",
                    'permission': "rides#view_KPI_avg_rides_per_customer_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "avgRidesPerCustomerTillDate",
                    'permission': "rides#view_KPI_avg_rides_per_customer_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Rides/Customer",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "avgRidesPerCustomerDaywise",
                    'permission': "rides#view_KPI_avg_rides_per_customer_daywise",
                }
            ]
        },
        {
            "title": "Average Ride Duration/Customer",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "rideDurationPerCustomerFtd",
                    'permission': "rides#view_KPI_ride_duration_per_customer_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "rideDurationPerCustomerTillDate",
                    'permission': "rides#view_KPI_ride_duration_per_customer_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Average Ride Duration/Customer",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "rideDurationPerCustomerDaywise",
                    'permission': "rides#view_KPI_ride_duration_per_customer_daywise",
                }
            ]
        },
        {
            "title": "active Drivers",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "activeDriversFtd",
                    'permission': "rides#view_KPI_active_drivers_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "activeDriversTillDate",
                    'permission': "rides#view_KPI_active_drivers_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Active Drivers",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "activeDriversDaywise",
                    'permission': "rides#view_KPI_active_drivers_daywise",
                }
            ]
        },
        {
            "title": "avg Collection/Driver",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "avgCollectionPerDriverFtd",
                    'permission': "rides#view_KPI_avg_collection_per_driver_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "avgCollectionPerDriverTillDate",
                    'permission': "rides#view_KPI_avg_collection_per_driver_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Collection/Driver",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "avgCollectionsPerDriverDaywise",
                    'permission': "rides#view_KPI_avg_collections_per_driver_daywise",
                }
            ]
        },
        {
            "title": "Avg Ride Duration/Driver/Day",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "rideDurationPerDriverFtd",
                    'permission': "rides#view_KPI_ride_duration_per_driver_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "rideDurationPerDriverTillDate",
                    'permission': "rides#view_KPI_ride_duration_per_driver_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Ride Duration/Driver/Day",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "rideDurationPerDriverDaywise",
                    'permission': "rides#view_KPI_ride_duration_per_driver_daywise",
                }
            ]
        },
        {
            "title": "Avg Rides/Driver/Day",
            "chartType":ChartType.MTDvsLMTD,
            "kpis": [
                {
                    "title": "Today",
                    "id": "avgRidesPerDriverFtd",
                    'permission': "rides#view_KPI_avg_rides_per_driver_ftd",
                    'lmtdLabel': "LMTD",
                    "data": {}
                },
                {
                    "title": "MTD vs LMTD",
                    "id": "avgRidesPerDriversTillDate",
                    'permission': "rides#view_KPI_avg_rides_per_driver_till_date",
                    'lmtdLabel': "LMTD",
                    "data": {}
                }
            ]
        },
        {
            "title":"Avg Rides/Driver/Day",
            "chartType": ChartType.DAYWISE,
            "kpis":[
                {
                    "id": "avgRidesPerDriverDaywise",
                    'permission': "rides#view_KPI_avg_rides_per_driver_daywise",
                }
            ]
        }
    ]
}

const overviewSlice = createSlice({
    name: 'overview',
    initialState: initialState,
    reducers: {
        setKpiData: (state, action) => {
            state = action.payload
            return state
        }
    },
});

export const overview = overviewSlice.reducer;
