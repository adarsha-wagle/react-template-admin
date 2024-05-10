// src/__tests__/useMemoTheme.test.tsx
import { useMemo } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, vi } from 'vitest';
import { createTheme } from '@mui/material';

import { themeSettings } from './theme/theme';

describe('App', () => {
  it('should return a new theme object on mode change', () => {
    const lightTheme = createTheme(themeSettings('light'));
    const darkTheme = createTheme(themeSettings('dark'));

    console.log('light theme object', lightTheme);

    expect(lightTheme).not.toEqual(darkTheme);
  });

  it('should not recreate the theme on the same mode', () => {
    const { result, rerender } = renderHook(() =>
      useMemo(() => createTheme(themeSettings('light')), [])
    );
    const initialTheme = result.current;

    act(() => {
      rerender(); // Simulate re-render without mode change
    });

    expect(result.current).toBe(initialTheme);
  });
});
