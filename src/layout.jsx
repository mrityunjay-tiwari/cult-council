import React from 'react'
import NavigationMenu from './components/header/NavBar'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/next';

const Layout = () => {
  return (
    <>
    <NavigationMenu />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout;