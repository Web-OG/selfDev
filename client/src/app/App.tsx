import './App.scss';
import {AppRouter} from './providers/AppRouter';
import {useTheme} from './providers/ThemeProvider';
import {userActions} from 'entities/User';
import {Suspense, useEffect} from 'react';
import {useAppDispatch} from 'app/providers/StoreProvider/lib/useAppDispatch';
import {Loader} from 'shared/ui/Loader';
import {LOCALSTORAGE} from 'shared/constants/localstorage';

const App = () => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem(LOCALSTORAGE.USER_KEY);
    if (user) {
      dispatch(userActions.initAuthData(JSON.parse(user)));
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