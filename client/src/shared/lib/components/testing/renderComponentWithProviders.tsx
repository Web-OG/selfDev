import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTest';
import {MemoryRouter} from 'react-router-dom';
import {StoreProvider} from 'app/providers/StoreProvider';
import {Theme, ThemeProvider} from 'shared/providers/ThemeProvider';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userReducer} from 'entities/User';
import {userRegistrationReducer} from 'features/Registration/model/slices/userRegistrationSlice';

const rootReducerForTests = combineReducers({
  user: userReducer,
  userRegistration: userRegistrationReducer
});

export type RootReducerType = ReturnType<typeof rootReducerForTests>

export interface ComponentRenderOptions {
  route?: string;
  initialState?: Partial<RootReducerType>;
  localStorage?: Record<string, unknown>;
  initialTheme?: Theme
}

const defaultOptions: ComponentRenderOptions = {
  route: '/',
  initialState: {}
};

export const renderComponentWithProviders = (component: ReactNode, options: ComponentRenderOptions = defaultOptions) => {
  const {route = '/', initialState, localStorage, initialTheme} = options;

  if (localStorage) {
    for (const localStorageKey in localStorage) {
      window.localStorage.setItem(localStorageKey, JSON.stringify(localStorage[localStorageKey]));
    }
  }

  const store = configureStore({reducer: rootReducerForTests, preloadedState: initialState});

  const Ui = <MemoryRouter initialEntries={[route]}>
    <StoreProvider testStore={store} initialState={initialState}>
      <I18nextProvider i18n={i18nForTests}>
        <ThemeProvider initialTheme={initialTheme}>
          {component}
        </ThemeProvider>
      </I18nextProvider>
    </StoreProvider>
  </MemoryRouter>;


  return {
    store,
    ...render(Ui)
  };
};