import {useEffect, useState} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {ReducersList, ReduxStoreWithManager, StateSchemaKey} from '../config/StateSchema';

export const useReducerManager = (reducers: ReducersList, removeAfterUnmount: boolean = true) => {
  const [isMount, setIsMount] = useState(false);
  const [isReducersInit, setIsReducersInit] = useState(false);
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      const reducersMap = store?.reducerManager?.getReducerMap();
      Object.entries(reducers).forEach(([name, reducer]) => {
        const mounted = reducersMap?.[name as StateSchemaKey];
        if (!mounted) {
          store?.reducerManager?.add(name as StateSchemaKey, reducer);
          dispatch({type: `@INIT ${name} reducer`});
        }
      });
      setIsReducersInit(true);
    }

    return () => {
      if (removeAfterUnmount && isMount) {
        Object.entries(reducers).forEach(([name]) => {
          store?.reducerManager?.remove(name as StateSchemaKey);
          dispatch({type: `@DESTROY ${name} reducer`});
        });
      }
    };
    //eslint-disable-next-line
  }, [dispatch, isMount]);

  return {isReducersInit};
};