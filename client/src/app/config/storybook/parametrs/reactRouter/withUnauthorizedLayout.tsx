import {ReactNode} from 'react';
import {reactRouterParameters} from 'storybook-addon-react-router-v6';
import LayoutUnAuthorized from '../../../../providers/AppRouterProvider/layouts/unAuthorized/ui/LayoutUnAuthorized';

export const withUnauthorizedLayout = (el: ReactNode) => {
  return {reactRouter: reactRouterParameters({
    routing: {
      path: '/',
      element: <LayoutUnAuthorized/>,
      children: [
        {
          element: el,
          index: true
        }
      ],
    }
  })};
};