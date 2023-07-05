import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/themeProvider/ui/ThemeProvider';
import 'app/styles/index.scss';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './shared/config/i18nConfig/i18n';

render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
  document.getElementById('app'),
);
