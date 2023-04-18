import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';
import Service from './components/Service/Service';
import Orders from './components/Orders/Orders';
import PrivetRoutes from './Routes/PrivetRoutes';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/orders',
        element: <PrivetRoutes><Orders></Orders> </PrivetRoutes>
      },
      {
        path: '/profile',
        element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
