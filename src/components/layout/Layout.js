import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

function Layout() {
  let location = useLocation();
  return (
    <>
      <div className='container-fluid'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <Navbar />
        </div>
        <div className='row'>
          {location.pathname !== '/' ? <><div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'><Sidebar /></div><div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'><Outlet /></div></> : ""}
          {location.pathname === '/' ? <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'><Outlet /></div> : ""}
          
        </div>
      </div>
    </>
  )
}

export default Layout;