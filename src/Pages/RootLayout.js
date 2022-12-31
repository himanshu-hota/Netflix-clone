import React from 'react'
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

export default RootLayout