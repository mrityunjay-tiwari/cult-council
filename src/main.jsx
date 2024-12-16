import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import MedalShowcase from './components/about/awardsShowcase.jsx'
import WelcomePage from './components/WelcomePage.jsx'
import Team from './components/teams/team.jsx'
import Home from './components/home/home.jsx'
import Clubs from './components/clubs/Clubs.jsx'
import Events from './components/events/events.jsx'
import Imc from './components/clubs/imc/Imc.jsx'
import Fac from './components/clubs/fac/fac.jsx'
import Masq from './components/clubs/masq/masq.jsx'
import Wmc from './components/clubs/wmc/wmc.jsx'
import Dfz from './components/clubs/dfz/dfz.jsx'
import Aavran from './components/clubs/aavran/aavran.jsx'
import Quiz from './components/clubs/quiz/quiz.jsx'
import Lit from './components/clubs/lit/lit.jsx'
import Layout from './Layout.jsx'


// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children : [
//         {
//           path : "",
//           element: <Home />
//         },
//         {
//           path : "about",
//           element : <MedalShowcase />
//         },
//         {
//           path : "team",
//           element: <Imc />
//         },
//         {
//           path : "clubs",
//           element : <Clubs />,
//           children:[
//             {
//               path:"imc",
//               element: <Imc />
//             }
//           ]
//         },
//         {
//           path : "events",
//           element : <Masq />
//         }
//       ]
//     },
    
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<MedalShowcase />} />
        <Route path='team' element={<Team />} />
        <Route path='events' element={<Events />} />
        <Route path='clubs' element={<Clubs />} />
        <Route path='clubs/imc' element={<Imc />} />
        <Route path='clubs/wmc' element={<Wmc />} />
        <Route path='clubs/masq' element={<Masq />} />
        <Route path='clubs/fac' element={<Fac />} />
        <Route path='clubs/dfz' element={<Dfz />} />
        <Route path='clubs/aavran' element={<Aavran />} />
        <Route path='clubs/quiz' element={<Quiz />} />
        <Route path='clubs/lit' element={<Lit />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
