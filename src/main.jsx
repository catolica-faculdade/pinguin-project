import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

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
