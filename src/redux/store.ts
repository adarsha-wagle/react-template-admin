import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './actions/theme.slice.ts';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
