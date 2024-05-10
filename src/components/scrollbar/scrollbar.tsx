import { forwardRef, ReactNode } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/system';

import { StyledScrollbar, StyledRootScrollbar } from './styles.ts';

// ----------------------------------------------------------------------

interface ScrollbarProps extends BoxProps {
  children?: ReactNode;
  sx?: SxProps;
  color?: string | ((theme: any) => string);
}

const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  ({ children, sx, color, ...other }, ref) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  }
);

export default Scrollbar;
