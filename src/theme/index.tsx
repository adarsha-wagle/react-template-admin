import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { palette } from './palette.ts';
import { shadows } from './shadows.ts';
import { overrides } from './overrides.ts';
import { typography } from './typography.tsx';
import { customShadows } from './custom-shadows.ts';

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: any) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
