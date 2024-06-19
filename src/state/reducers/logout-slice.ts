import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
    name: 'logout',
    initialState: {} ,
    reducers: {
      clearResults() {
        // Note that this should be left intentionally empty.
              // Clearing redux state and localForage happens in rootReducer.ts.
      },
      // redirectTo404() {
      //   // Note that this should be left intentionally empty.
      //         // Clearing redux state and localForage happens in rootReducer.ts.
      // },
    },
  })
  // redirectTo404

export const { clearResults } = logoutSlice.actions
export const logout = logoutSlice.reducer;
