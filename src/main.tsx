import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivacyPolicy from './pages/legal/PrivacyPolicy.tsx';
import TermsOfService from './pages/legal/TermsOfService.tsx';
import NotFound from './pages/NotFound.tsx';
import Cookies from './pages/legal/Cookies.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/legal/terms-of-service",
    element: <TermsOfService />,
  },
  {
    path: "/legal/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/legal/cookies-policy",
    element: <Cookies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
