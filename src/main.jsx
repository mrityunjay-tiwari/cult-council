import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MedalShowcase from './components/about/awardsShowcase.jsx'
import WelcomePage from './components/WelcomePage.jsx'
import Team from './components/teams/team.jsx'
import Home from './components/home/home.jsx'
import Clubs from './components/clubs/Clubs.jsx'
import Events from './components/events/events.jsx'
import Layout from './layout.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children : [
        {
          path : "",
          element: <Home />
        },
        {
          path : "about",
          element : <MedalShowcase />
        },
        {
          path : "team",
          element: <Team />
        },
        {
          path : "clubs",
          element : <Clubs />
        },
        {
          path : "events",
          element : <Events />
        }
      ]
    },
    
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
