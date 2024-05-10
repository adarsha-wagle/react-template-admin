import { createSlice } from '@reduxjs/toolkit';
import { ThemeMode } from 'src/types/theme_type.ts';

interface ThemeState {
  mode: ThemeMode;
}

// Function to fetch the initial theme mode from localStorage
const getInitialThemeMode = (): ThemeMode => {
  const savedTheme = localStorage.getItem('themeMode');
  return savedTheme ? JSON.parse(savedTheme) : 'light';
};

const initialState: ThemeState = {
  mode: getInitialThemeMode(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', JSON.stringify(state.mode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
