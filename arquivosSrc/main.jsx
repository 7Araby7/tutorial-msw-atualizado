import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';
import { Home } from './templates/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);