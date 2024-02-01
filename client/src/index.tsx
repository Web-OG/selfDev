import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from 'app/App';
import './app/styles/index.scss';
import 'shared/config/i18n/i18n';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import ErrorBoundary from './app/providers/ErrorBoundary/ui/ErrorBoundary';
import {StoreProvider} from 'app/providers/StoreProvider';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root element not found');
}

const container = createRoot(root);

container.render(
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>
);