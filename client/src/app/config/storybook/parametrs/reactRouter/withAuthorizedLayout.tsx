import {ReactNode} from 'react';
import {reactRouterParameters} from 'storybook-addon-react-router-v6';
import LayoutAuthorized from '../../../../providers/AppRouterProvider/layouts/authorized/ui/LayoutAuthorized';

export const withAuthorizedLayout = (el: ReactNode) => {
  return {reactRouter: reactRouterParameters({
    routing: {
      path: '/',
      element: <LayoutAuthorized/>,
      children: [
        {
          element: el,
          index: true
        }
      ],
    }
  })};
};