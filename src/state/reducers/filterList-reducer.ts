import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filterListDataGrid",
  initialState: null,
  reducers: {
    setFilterList: (state, action) => {
      return action.payload;
    },
    clearFilterList: () => {
      return null;
    },
  },
});

export const { setFilterList, clearFilterList } = filtersSlice.actions;

export const dataGridFilterList = filtersSlice.reducer;
