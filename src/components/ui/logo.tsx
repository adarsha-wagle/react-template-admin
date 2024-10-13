import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import Logoo from 'src/assets/logo/logoo.png';

// ----------------------------------------------------------------------

interface NavProps {
  openNav?: boolean;
  onCloseNav?: () => void;
  sx: object;
  disabledLink?: boolean; // Add this line if 'disabledLink' is expected
}

const Logo = forwardRef(({ disabledLink = false, sx, ...other }: NavProps, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <img src={Logoo} alt="Kaleidoscopic" />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

export default Logo;
