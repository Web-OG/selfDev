import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {
  Action,
  EnhancedStore,
  ReducersMapObject,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction
} from '@reduxjs/toolkit';
import {createReduxStore} from '../config/store';
import {StateSchema} from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  testStore?: EnhancedStore<StateSchema, Action, Tuple<[StoreEnhancer<{
    dispatch: ThunkDispatch<StateSchema, unknown, UnknownAction>
  }>, StoreEnhancer]>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {children, initialState, asyncReducers, testStore} = props;
  const store = testStore ? testStore : createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
