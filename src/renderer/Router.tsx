import { createBrowserRouter, Navigate } from 'react-router-dom';

import Home from './layouts/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Navigate replace to="/invitation-status/organization" />,
      },
      ...AUTH_AFTER_LOGIN,
      ...ORGANIZATION_ROUTES,
      ...HOME_PAGE_ROUTES,
      ...SENIOR_APP_ROUTES,
      ...INVITATION_STATUS_ROUTES,
      ...KIOSK_MARU_ROUTES,
    ],
  },
  ...AUTH_BEFORE_LOGIN,
]);

export default router;
