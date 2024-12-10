import React from 'react'
import TechTeamDisplay from '../techTeam'
import VideoTeamDisplay from '../videoTeam'
import DesignTeamDisplay from '../designTeam'
import SeniorTeamDisplay from '../helmTeam'
import Tracing from '../tracing'

const Team = () => {
  return (
    <div className='flex flex-col h-full bg-slate-900 pb-10'>
        <Tracing />
        <SeniorTeamDisplay />
        <TechTeamDisplay />
        <VideoTeamDisplay />
        <DesignTeamDisplay />
    </div>
  )
}   

export default Team