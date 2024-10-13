import { Suspense, useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './global.css';

// import { ROLES } from './config/roles.ts';

import RootLayout from './layouts/root_layout.tsx';
// import RequireAuth from './layouts/required_auth.tsx';

// import RootBoundaryError from './layouts/root_boundary_error.tsx';
import PersistLogin from './layouts/persist_login.tsx';
import DashboardLayout from './layouts/dashboard/index.tsx';
import BookingPage from './pages/booking_page.tsx';
import ContactPage from './pages/contact_page.tsx';
import HomePage from './pages/home_page.tsx';

function App() {
  /* eslint-disable implicit-arrow-linebreak */
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route element={<DashboardLayout />}>
              <Route path="/login" element={<HomePage />} />
              <Route path="/404" element={<HomePage />} />
              <Route element={<PersistLogin />}>
                <Route index element={<HomePage />} />
                {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}> */}
                <Route path="booking" element={<BookingPage />} />
                <Route path="contact" element={<ContactPage />} />
                {/* </Route> */}
              </Route>
            </Route>
          </Route>
        )
      ),

    [] /* eslint-enable implicit-arrow-linebreak */
  );

  return (
    // <CssBaseline />
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
