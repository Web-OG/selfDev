import {Action, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {userReducer} from 'entities/User';
import {$api, isAxiosError} from 'shared/api/api';
import {StateSchema, ThunkExtraArg} from './StateSchema';
import {createReducerManager} from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
    isAxiosError: isAxiosError
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema, Action>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
