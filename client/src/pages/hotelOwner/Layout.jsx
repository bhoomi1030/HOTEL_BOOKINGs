import React from 'react'
import NavBar from '../../components/hotelOwner/Navbar'
import SideBar from '../../components/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar/>
      <div className='flex flex-1 h-full'>
        <SideBar/>
        <div className='flex-1 p-4 pt-10 md:px-10 h-full overflow-y-auto'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout;
