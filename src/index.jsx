/* @refresh reload */
import { render } from 'solid-js/web';

import App from './pages/App';
import { Router, Routes, Route } from '@solidjs/router';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={App} />
    </Routes>
  </Router>

  ), root);