import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-store",
  storage,
  blacklist: [
    "partnerTheme",
    "kpiData",
    "tableData",
    "searchData",
    "tablePagination",
    "notif",
    "fspLogo",
    "revenueAssurance",
    "contractUploadApi",
    "userManagementUM",
    "configApi",
    "orderService"
  ],
};

export default persistConfig;
