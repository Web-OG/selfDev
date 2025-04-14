import {memo, ReactNode, Suspense} from 'react';
import {PageLoader} from '@/shared/ui/PageLoader/PageLoader';

export interface RouteWithSuspenseProps {
  element: ReactNode
}

const RouteWithSuspense = memo((props: RouteWithSuspenseProps) => {
  const {element} = props;

  return (
    <Suspense fallback={<PageLoader/>}>
      {element}
    </Suspense>
  );
});

RouteWithSuspense.displayName = 'RouteWithSuspense';
export {RouteWithSuspense};