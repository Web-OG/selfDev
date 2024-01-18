import {Navigate, useLocation} from 'react-router-dom';
import {PageLoader} from 'shared/ui/PageLoader/PageLoader';
import {memo, ReactNode, Suspense} from 'react';

interface RequireAuthProps {
  element: ReactNode,
  authed: boolean
}

const RequireAuthRoute = memo((props: RequireAuthProps) => {
  const {element, authed} = props;
  const location = useLocation();

  if (!authed) {
    return <Navigate to={'/login'} state={{from: location}} replace/>;
  }

  return (
    <Suspense fallback={<PageLoader/>}>
      {element}
    </Suspense>
  );
});

RequireAuthRoute.displayName = 'RequireAuthRoute';
export {RequireAuthRoute};
