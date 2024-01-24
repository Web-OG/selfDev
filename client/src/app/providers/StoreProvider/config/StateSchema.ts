import {UserSchema} from 'entities/User';
import {AuthenticationSchema} from 'features/Authentication';
import {AxiosInstance} from 'axios';
import {EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject, UnknownAction} from '@reduxjs/toolkit';

export interface StateSchema {
  user: UserSchema;
  // async
  loginForm?: AuthenticationSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateFromReducersMapObject<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
