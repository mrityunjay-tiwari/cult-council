import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Main from './components/hero'
import SeniorTeamDisplay from './components/helmTeam'
import TechTeamDisplay from './components/techTeam'
import VideoTeamDisplay from './components/videoTeam'
import DesignTeamDisplay from './components/designTeam'
import MedalShowcase from './components/awardsShowcase'
import Events from './components/events'
import Team from './components/team'
import Tracing from './components/tracing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900'>
      <Tracing />
       <Main />
       <MedalShowcase />
       <Events />
       <SeniorTeamDisplay />
       <Team />
       <Footer />      
    </div>
  )
}

export default App