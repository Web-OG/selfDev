import './App.scss';
import {AppRouter} from './providers/AppRouter';
import {useTheme} from './providers/ThemeProvider';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
};

export {App};