import './App.scss';
import {AppRouter} from './providers/AppRouter';
import {useTheme} from './providers/ThemeProvider';
import {userActions} from 'entities/User';
import {Suspense, useEffect} from 'react';
import {useAppDispatch} from 'shared/hooks/useAppDispatch';
import {Loader} from 'shared/ui/Loader';

const App = () => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
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