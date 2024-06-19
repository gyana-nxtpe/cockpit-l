import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../common-types';

export const userAuthInitialState = {
    isLoggedIn: false,
    authToken: "",
    email: "",
    partnerType: UserType,
    role: "",
    userName:"",
    permissionList: {},
    partnerCode:""
}

const authSlice = createSlice({
  name: 'auth',
  initialState: userAuthInitialState,
  reducers: {
    setUserInfo: (state, action) => {
      if (action.payload.isLoggedIn) {
        return {
          ...state,
          ...action.payload,
        }
      } else {
        return userAuthInitialState
      }
    },
  },
});

export const { setUserInfo } = authSlice.actions;

export const auth = authSlice.reducer;
