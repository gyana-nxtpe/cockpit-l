import { rtkQueryErrorLogger } from "./middleware";
import persistConfig from "./persistStore";
import rootReducer from "./rootreducer";
import { partnerThemeApi, kpiDataApi, FspLogoApi } from "./services";
import OrderKpiService from "./services/OrderKpiService";
import OrderService from "./services/OrderService";
import UserManagementService from "./services/UserManagement.services";
import configServiceApi from "./services/configService";
import contractUploadService from "./services/contractServices";
import { authDataApi } from "./services/getAuthData";
import { searchDataApi } from "./services/getSearchData";
import { tableDataApi } from "./services/gettabledata";
import SettlementService from "./services/settlementService";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...reduxPersistActions],
      },
    }).concat(
      partnerThemeApi.middleware,
      kpiDataApi.middleware,
      tableDataApi.middleware,
      searchDataApi.middleware,
      authDataApi.middleware,
      FspLogoApi.middleware,
      UserManagementService.middleware,
      contractUploadService.middleware,
      configServiceApi.middleware,
      SettlementService.middleware,
      OrderService.middleware,
      OrderKpiService.middleware,
      rtkQueryErrorLogger
    ),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
