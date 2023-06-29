import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProvider/ui/ThemeProvider';
import './shared/config/i18nConfig/i18n';

render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('app'),
);
