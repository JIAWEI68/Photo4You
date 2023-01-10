import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'

const RenderPage = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RenderPage