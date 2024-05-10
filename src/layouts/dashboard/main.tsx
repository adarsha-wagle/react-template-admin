import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import { useResponsive } from 'src/hooks/use-responsive.ts';

import { NAV, HEADER } from './config-layout.ts';

// ----------------------------------------------------------------------

const SPACING = 8;

interface MainProps extends BoxProps {
  children?: React.ReactNode;
}

export default function Main({ children, sx, ...other }: MainProps) {
  const lgUp = useResponsive('up', 'lg', 'down');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: lgUp ? `${HEADER.H_DESKTOP + SPACING}px` : `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
