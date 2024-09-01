import {UserSchema} from 'entities/User';
import {AuthenticationSchema} from 'features/Authentication';
import {AxiosError, AxiosInstance} from 'axios';
import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  StateFromReducersMapObject
} from '@reduxjs/toolkit';
import {AuthorRegistrationSchema, UserRegistrationSchema} from 'features/Registration';
import {ProfileSchema} from 'features/EditableProfile';
import {PostListSchema} from 'widgets/InfinityPostList';
import {PostDetailsSchema} from 'features/PostDetails';
import {PostCommentsSchema} from 'features/PostComments';

export interface StateSchema {
  user: UserSchema;
  // async
  profile?: ProfileSchema;
  authentication?: AuthenticationSchema;
  userRegistration?: UserRegistrationSchema;
  authorRegistration?: AuthorRegistrationSchema;
  postList?: PostListSchema;
  postDetails?: PostDetailsSchema;
  postComments?: PostCommentsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateFromReducersMapObject<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  isAxiosError: (payload: unknown) => payload is AxiosError;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
