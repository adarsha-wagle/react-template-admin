import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Divider, Drawer, IconButton, Button, Avatar, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdjustIcon from '@mui/icons-material/Adjust';
import logo from 'src/assets/logo/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'src/redux/actions/theme.slice.ts';
import { ThemeMode } from 'src/types/theme_type.ts';
import CloseIcon from '@mui/icons-material/Close';

import NavItems from './nav_items.tsx';

interface DrawerContentProps {
  handleDrawerToggle: () => void;
}

const drawerWidth = 280;

const renderLogo = (
  <Avatar alt="My Logo" src={logo} sx={{ width: '4.375rem', height: '4.375rem' }} />
);

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const dispatch = useDispatch();

  const mode = useSelector((state: { theme: { mode: ThemeMode } }) => state.theme.mode);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const MemoizedDrawerContent = React.memo(DrawerContent);

  return (
    <AppBar
      sx={{
        position: 'sticky',
        top: '0',
        zIndex: '1000',
      }}
    >
      <nav
        style={{ display: 'flex', width: '100%', paddingTop: '1rem', paddingBottom: '1rem' }}
        className="apply--maxwidth"
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1rem',
          }}
        >
          <Link to="/" replace style={{ textDecoration: 'none' }}>
            {renderLogo}
          </Link>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <NavItems />
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary',
                color: 'white',
                width: '100%',
                fontSize: '1rem',
                fontFamily: 'Roboto Serif',
                padding: '0.2rem 1.2rem',
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: '#1f0e0e',
                },
              }}
              onClick={() => dispatch(toggleTheme())}
              startIcon={<AdjustIcon />}
            >
              {mode}
            </Button>
          </Box>
        </Box>
      </nav>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <MemoizedDrawerContent handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </AppBar>
  );
}

export default NavBar;

const DrawerContent: React.FC<DrawerContentProps> = ({ handleDrawerToggle }) => (
  <Box sx={{ padding: '1rem' }}>
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box
      sx={{
        flexGrow: 1,
        ml: { xl: '4.3rem', lg: '3rem', xs: '1rem' },
        display: 'flex',
        alignItems: 'flex-end',
        gap: '1rem',
      }}
    >
      {renderLogo}
    </Box>
    <Divider />
    <List>
      <NavItems />
    </List>
  </Box>
);
