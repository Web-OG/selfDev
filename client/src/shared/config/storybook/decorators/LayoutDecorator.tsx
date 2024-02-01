import {Decorator} from '@storybook/react';
import {Route, Routes} from 'react-router-dom';
import {LayoutAuthorized} from 'app/providers/AppRouter/layouts/authorized';
import {LayoutUnAuthorized} from 'app/providers/AppRouter/layouts/unAuthorized';

export const LayoutDecorator: Decorator = (Story, context) => {
  const {parameters: {pageLayout}} = context;
  const currentLayout = pageLayout === 'authorized' ? <LayoutAuthorized/> : <LayoutUnAuthorized/>;

  return (
    <Routes>
      <Route path="/" element={currentLayout}>
        <Route
          index
          element={<Story/>}
        />
      </Route>
    </Routes>
  );
};

