import {useEffect, useState} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {ReducersList, ReduxStoreWithManager, StateSchemaKey} from '../config/StateSchema';

export const useReducerManager = (reducers: ReducersList, removeAfterUnmount: boolean = true) => {
  const [isReducersInit, setIsReducersInit] = useState(false);
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    setIsReducersInit(true);
  }, []);

  useEffect(() => {
    if (isReducersInit) {
      Object.entries(reducers).forEach(([name, reducer]) => {
        store?.reducerManager?.add(name as StateSchemaKey, reducer);
        dispatch({type: `@INIT ${name} reducer`});
      });
    }

    return () => {
      if (removeAfterUnmount && isReducersInit) {
        Object.entries(reducers).forEach(([name]) => {
          store?.reducerManager?.remove(name as StateSchemaKey);
          dispatch({type: `@DESTROY ${name} reducer`});
        });
      }
    };

  }, [dispatch, isReducersInit, reducers, removeAfterUnmount, store.reducerManager]);

  return {isReducersInit};
};