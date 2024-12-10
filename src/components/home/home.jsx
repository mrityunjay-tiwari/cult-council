import React from 'react'
import WelcomePage from '../WelcomePage'
import MedalShowcase from '../about/awardsShowcase'
import Events from '../events/events'
import Team from '../teams/team'

const Home = () => {
  return (
    <>
        <WelcomePage />
        <MedalShowcase />
        <Events />
        <Team />
    </>
  )
}

export default Home