import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import ProfileStatus from './pages/ProfileStatus.jsx'
import Login from './admin/Login.jsx'
import Register from './admin/Register.jsx'
import Dashboard from './admin/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "admin-panel",
        element: <Login />
      },
      {
        path: "admin-panel/register",
        element: <Register />
      },
      {
        path: "admin-panel/dashboard",
        element: <Dashboard />
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "profile-status",
            element: <ProfileStatus />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)