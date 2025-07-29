import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
const SideBar = () =>{

    const sidebarLinks = [
        { name: 'Dashboard', path: '/owner' , icon : assets.dashboardIcon },
        { name: ' Add Rooms', path: '/owner/add-rooms',icon:assets.addIcon  },
        { name: 'List Room', path: '/owner/List-room', icon: assets.listIcon },
        
    ]

    return (
        <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
         { sidebarLinks.map((item , index)=>(
            <NavLink to ={item.path} key={index} end = '/owner'className={({isActive}) => `flex items-center gap-3 px-4 py-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"  : "hover:bg-gray-100/90 border-white text-gray-700 "}`}>
                <img src={item.icon} alt={item.name} className='h-6 w-6' />
                <p className='hidden text-center md:block'>{item.name}</p>
            </NavLink>
         ))
         }
        </div>
    )
}
export default SideBar;