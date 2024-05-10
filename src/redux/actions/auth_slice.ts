import { createSlice } from '@reduxjs/toolkit';

interface IAuth {
  token: string | null;
}

// Function to fetch the initial theme mode from localStorage

const initialState: IAuth = {
  token: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const selectCurrentToken = (state: { auth: IAuth }) => state.auth.token;

export default themeSlice.reducer;
