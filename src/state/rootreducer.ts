import { AnyAction, Reducer, combineReducers } from '@reduxjs/toolkit';
import {auth, userAuthInitialState} from './reducers/auth-reducer';
import {date} from './reducers/date-reducer';
import {overview} from './reducers/overview-reducer';
import {revenueAssurance} from './reducers/revenue-assurance-reducer';
import {notif} from './reducers/notif-popup-reducer';
import {logout} from './reducers/logout-slice';
import {tableColumns} from './reducers/table-column-reducer';
import {tablePagination} from './reducers/table-pagination-reducer';
import { partnerThemeApi, kpiDataApi, FspLogoApi } from './services';
import { tableDataApi } from './services/gettabledata';
import { searchDataApi } from './services/getSearchData';
import { authDataApi } from './services/getAuthData';
import { RootState } from './store';
import contractUploadService from './services/contractServices';
import UserManagementService from './services/UserManagement.services';
import configServiceApi from './services/configService';
import SettlementService from './services/settlementService';
import OrderService from './services/OrderService';
import OrderKpiService from './services/OrderKpiService';
import { dataGridFilterList } from './reducers/filterList-reducer';
// import { BASE_PAGE_URL } from 'constants/url.constant';

const appReducer = combineReducers({
  auth,
  date,
  overview,
  tableColumns,
  tablePagination,
  notif,
  logout,
  revenueAssurance,
  dataGridFilterList,
  [partnerThemeApi.reducerPath]: partnerThemeApi.reducer,
  [kpiDataApi.reducerPath]: kpiDataApi.reducer,
  [tableDataApi.reducerPath]: tableDataApi.reducer,
  [searchDataApi.reducerPath]: searchDataApi.reducer,
  [authDataApi.reducerPath]: authDataApi.reducer,
  [FspLogoApi.reducerPath]: FspLogoApi.reducer,
  [contractUploadService.reducerPath]: contractUploadService.reducer,
  [UserManagementService.reducerPath]: UserManagementService.reducer,
  [configServiceApi.reducerPath]: configServiceApi.reducer,
  [SettlementService.reducerPath]: SettlementService.reducer,
  [OrderService.reducerPath]: OrderService.reducer,
  [OrderKpiService.reducerPath]: OrderKpiService.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'logout/clearResults') {
    const partnerCode = state.auth.partnerCode
    localStorage.clear()
    state = {
      auth:{
        ...userAuthInitialState,
        partnerCode: partnerCode
      }
    } as RootState
  }
  // else if(action.type === 'logout/redirectTo404'){
  //   window.location.href= `${BASE_PAGE_URL}/error`
  // }
  return appReducer(state, action)
}

export default rootReducer;