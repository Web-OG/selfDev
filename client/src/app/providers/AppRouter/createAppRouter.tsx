import {createLayout} from './layouts/createLayout';
import {createRoutes} from './routes/createRoutes';
import {routes} from './routes/routes';

export const createAppRouter = (authed: boolean) => {
  const routeObjects = createRoutes(routes, authed);

  return createLayout(routeObjects, authed);
};