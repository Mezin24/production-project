import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProvider/ui/ThemeProvider';
import './shared/config/i18nConfig/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import 'app/styles/index.scss';

render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('app'),
);
