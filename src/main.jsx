import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import { UserPovider } from './context/UserContext';
import './index.css';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserPovider>
      <RouterProvider router={router} />
    </UserPovider>

  </React.StrictMode>,
);
