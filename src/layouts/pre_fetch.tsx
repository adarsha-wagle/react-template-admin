import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { store } from 'src/redux/store';

// Used to pre fetch data on protect../ routes
function PreFetch() {
  useEffect(() => {
    console.log('subscribing');
    // const users = store.dispatch(userApiSlice.endpoints.getUsers.initiate())
    return () => {
      console.log('unsubscribing');
    };
  }, []);

  return <Outlet />;
}

export default PreFetch;
