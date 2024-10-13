import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TRootState } from '../store.ts';

type TAccessToken = string | null;

interface IUser {
  email?: string;
  phoneNumber?: string;
  role?: string;
  name?: string;
}

interface IUserInfoLocal extends IUser {
  previousLoggedIn: boolean;
}

interface IUserInfo extends IUser {
  accessToken: string;
}
interface IInitialState {
  accessToken: TAccessToken;
  userInfoLocal: IUserInfoLocal;
  isCheckAuthLoading: boolean;
  userInfo: IUserInfo;
}

// Checking whether the user is previously logged in or not
const getPreviousUserInfo = () => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '') as IUserInfoLocal;
    return userInfo;
  } catch (err) {
    return {
      email: '',
      phoneNumber: '',
      previousLoggedIn: false,
      role: '',
      name: '',
    };
  }
};

const initialState: IInitialState = {
  accessToken: null,
  userInfoLocal: getPreviousUserInfo(),
  userInfo: {
    name: '',
    email: '',
    role: '',
    accessToken: '',
    phoneNumber: '',
  },
  isCheckAuthLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo.accessToken = action.payload.accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
    },
    setIsCheckAuthLoading: (state, action) => {
      state.isCheckAuthLoading = action.payload;
    },
  },
});

// eslint-disable-next-line
export const { setCredentials, logOut, setIsCheckAuthLoading } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: TRootState) => state.auth.userInfo.accessToken;
export const userInfoLocal = (state: TRootState) => state.auth.userInfoLocal;
export const isCheckAuthLoading = (state: TRootState) => state.auth.isCheckAuthLoading;
