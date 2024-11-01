import React from 'react'
import TechTeamDisplay from './techTeam'
import VideoTeamDisplay from './videoTeam'
import DesignTeamDisplay from './designTeam'

const Team = () => {
  return (
    <div className='flex flex-col pb-10 gap-8'>
        
        <TechTeamDisplay />
        <VideoTeamDisplay />
        <DesignTeamDisplay />
    </div>
  )
}   

export default Team