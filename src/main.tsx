import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from '@tanstack/react-router';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
