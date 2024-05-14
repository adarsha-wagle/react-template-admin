import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top.ts';

import Nav from './nav.tsx';
import Main from './main.tsx';
import Header from './header.tsx';

export default function DashboardLayout() {
  const [openNav, setOpenNav] = useState(false);

  useScrollToTop();

  console.log('open nav', openNav);

  return (
    <>
      <Header
        onOpenNav={() => {
          console.log('oepn nav');
          setOpenNav(true);
        }}
      />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Main>
      </Box>
    </>
  );
}
