import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './actions/theme.slice.ts';
import { apiSlice } from './api/api_slice.ts';
import authReducer from './actions/auth_slice.ts';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: true,
});

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
