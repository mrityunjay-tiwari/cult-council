import React from 'react'
import WelcomePage from '../WelcomePage'
import MedalShowcase from '../about/awardsShowcase'
import Events from '../events/events'
import Team from '../teams/team'
// import Carousel from '../clubs/imc/eventsImc'
// import RotatingMusicIntrument from '../rotatingMusicIntrument'

const Home = () => {
  return (
    <div className='w-screen'>
        <WelcomePage />
        <MedalShowcase />
        <Events />
        <Team />
    </div>
  )
}

export default Home