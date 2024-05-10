import { ThemeMode } from 'src/types/theme_type.ts';
import { getPalette } from './palette.ts';

// Mui Theme Setting
export function themeSettings(mode: ThemeMode) {
  return {
    palette: getPalette(mode),
    typography: {
      fontFamily: 'Oswald, sans-serif',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 950,
        lg: 1200,
        xl: 1536,
      },
    },
  };
}
