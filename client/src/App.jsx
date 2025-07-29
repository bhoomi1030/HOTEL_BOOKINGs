import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes , useLocation , useNavigate  } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import HotelReg from './components/HotelReg';
import MyBooking from './pages/MyBooking';
import Layout from './pages/hotelOwner/Layout';
import AddRoom from './pages/hotelOwner/AddRoom';
import Dashboard from './pages/hotelOwner/dashboard';
import ListRoom from './pages/hotelOwner/ListRoom';
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
   const navigate = useNavigate();
  const {showHotelReg } = useAppContext();
 
  return (
    <div>
      <Toaster/>
     {!isOwnerPath && <Navbar/>}
     {showHotelReg && <HotelReg/>}
     <div className = 'min-h-[70vh] '>
    <Routes>
      <Route path ='/' element ={<Home />} />
      <Route path ='/rooms' element ={<AllRooms />} />
      <Route path ='/rooms/:id' element ={<RoomDetails />} />
      <Route path = '/My-Booking' element = {<MyBooking />} />
      <Route path = '/owner' element = {<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='add-rooms' element={<AddRoom/>} />
        <Route path='list-room' element={<ListRoom/>} />
        
      </Route>

      </Routes>
 
     </div>
     <Footer/> 
    </div> 
  );
};

export default App;
