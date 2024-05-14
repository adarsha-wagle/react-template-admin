import { FC } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive.ts';

import { bgBlur } from 'src/theme/css.ts';

import { HEADER, NAV } from './config-layout.ts';

// import Searchbar from './common/searchbar.tsx';
import AccountPopover from './common/account-popover.tsx';
// import LanguagePopover from './common/language-popover';
// import NotificationsPopover from './common/notifications-popover';

// ----------------------------------------------------------------------

interface HeaderProps {
  onOpenNav?: () => void;
}

const Header: FC<HeaderProps> = ({ onOpenNav }) => {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg', 'xl');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          search icon
        </IconButton>
      )}

      {/* <Searchbar /> */}

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <LanguagePopover /> */}
        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>
    </>
  );
  console.log('lg up', lgUp);
  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: lgUp
          ? `${theme.spacing(HEADER.H_DESKTOP)}px`
          : `${theme.spacing(HEADER.H_MOBILE)}px`,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
