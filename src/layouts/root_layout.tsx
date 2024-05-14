import { Outlet } from 'react-router-dom';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top.ts';

// import NavBar from './navbar/nav_bar.tsx';
// import FooterBar from './footer/footer_bar.tsx';

function RootLayout() {
  // Scroll To Top On Every Route Change
  useScrollToTop();

  return (
    <Outlet />
    // <>
    //   {/* <NavBar /> */}
    //   <Outlet />
    //   <FooterBar />
    // </>
  );
}

export default RootLayout;
