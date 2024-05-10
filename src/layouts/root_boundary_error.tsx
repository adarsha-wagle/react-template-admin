import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function RootBoundaryError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      return <div>BadRequest</div>;
    }
    if (error.status === 401) {
      return <div>Unauthorized</div>;
    }
    if (error.status === 503) {
      return <div>Service Unavailable</div>;
    }
    if (error.status === 404) {
      return <div>Page not Found</div>;
    }
  }

  return <div>Something Went Wrong</div>;
}

export default RootBoundaryError;
