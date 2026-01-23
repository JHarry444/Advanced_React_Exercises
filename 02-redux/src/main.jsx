import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { demoStore } from './store.js';

// TODO 7. Setup Provider around App, importing the demoStore
createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
);
