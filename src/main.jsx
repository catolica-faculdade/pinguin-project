import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

//pages
import Cadastro from './Pages/cadastro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>oi!</p>
  },
  {
    path: '/registro',
    element: <Cadastro />
  },
  {
    path: '/login',
    element: <p>logar aqui!</p>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
