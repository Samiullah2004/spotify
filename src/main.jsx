import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Artist from './pages/Artist.jsx'
import { AppProvider } from './context/Context.jsx'

const route = createBrowserRouter([
  {
    path : `*`,
    element : <h1>Hello</h1>
  },
  {
    path : '/',
    element : <App/>
  },
  {
    path : '/artist/:id',
    element : <Artist />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={route}></RouterProvider>
    </AppProvider>
  </React.StrictMode>,
)
