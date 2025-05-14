

import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App.jsx';
import HomePage from "../pages/HomePage";
import RulesPage from "../pages/RulesPage";
import QuizPage from "../pages/QuizPage";
import Result from '../pages/result.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      {
        index: true,
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/quiz',
        element: <QuizPage />,
      },
      {
        path: '/result',
        element: <Result />
      }
    ],
  },
]);

export default router;
