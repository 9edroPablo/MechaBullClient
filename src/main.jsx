import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

//importeciones
import Login from './pages/Login'

const router= createBrowserRouter([
  {
    path:"/", 
    element: <Login/>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
