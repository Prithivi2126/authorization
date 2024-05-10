import React from 'react'
import { Outlet } from 'react-router-dom'
import Welcomepage from './Welcomepage'

const Layout = () => {
  return (
    <div>
      <Welcomepage />
        <Outlet />
    </div>
  )
}

export default Layout
