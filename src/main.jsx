import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import "./index.css"
//pages
import Cadastro from './pages/Cadastro.jsx'
import CoverPage from './pages/CoverPage.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Menu from './pages/Menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
