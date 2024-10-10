import './App.scss';
import {AppRouter} from './providers/AppRouter';
import {useTheme} from 'shared/providers/ThemeProvider';
import {userActions} from 'entities/User';
import {Suspense, useEffect} from 'react';
import {useAppDispatch} from 'app/providers/StoreProvider/lib/useAppDispatch';
import {Loader} from 'shared/ui/Loader';
import {StorageDispatcher} from 'shared/lib/services/StorageService';

const App = () => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = StorageDispatcher.getItem('user');

    if (user) {
      dispatch(userActions.initAuthData(user));
    } else {
      dispatch(userActions.initAuthData(null));
    }
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<Loader/>}>
        <AppRouter/>
      </Suspense>
    </div>
  );
};

export {App};