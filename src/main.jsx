import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css';
import './home.css';

//pages
import Cadastro from './pages/Cadastro.jsx'
import CoverPage from './pages/CoverPage.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Menu from './pages/Menu.jsx'
import Profile from './pages/Profile.jsx'
import Notificacoes from './pages/Notificacoes.jsx';

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
    path: '/cadastro',
    element: <Cadastro />
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
    path: '/notificacoes',
    element: <Notificacoes/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
