import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css';
import './home.css';

//pages
import Register from './pages/Register.jsx'
import CoverPage from './pages/CoverPage.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Menu from './pages/Menu.jsx'
import Profile from './pages/Profile.jsx'
import Notifications from './pages/Notifications.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu/>
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cover-page',
    element: <CoverPage/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/notifications',
    element: <Notifications/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
