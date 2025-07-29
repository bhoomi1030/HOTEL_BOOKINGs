import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddRoom = () => {

  const {axios , getToken } = useAppContext()

  const[images, setImages] = useState({
    1: null ,
    2: null ,
    3: null , 
    4: null
})
  const [ inputs, setInputs ] = useState({
    roomType: '',
    pricePerNight : 0,
    maxGuests: 3,
    amenities: {
      'wifi': false,
      'breakfast': false, 
      'airConditioning': false,
      'parking': false,
      'pool': false,
    }
  })
   
  return(
    <form onSubmit = {onSubmitHandler}>
      <Title align = 'left' font = 'outfit' title = 'Add Room' subTitle = 'Add a new room to your hotel listing. Provide details such as room type, price, amenities, and upload images to showcase your property.'/>
      {/* upload area for images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
            <label htmlFor={`roomImage${key}`} key = {key}>
              <img src = {images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea } alt = '' className='max-h-13 opacity-80 cursor-pointer' />
              <input 
                type='file' accept='image/* ' 
                id={`roomImage${key}`} hidden
                onChange={e => setImages({...images , [key] : e.target.files[0]})}/>
            </label>
        ) ) }
      </div>



      <div className=' w-full flex max-sm:flex-col sm:gap-4 mt-4'> 
      <div className='flex-1 max-w-48'>
        <p className='text-gray-800 mt-4'>Room Type</p>
        <select value={inputs.roomType} onChange={e => setInputs({...inputs , roomType: e.target.value})}
        className='border opacity-70 rounded p-2 border-gray-300 mt-1 w-full'>
          <option value='Single'>Single</option>
          <option value='Double'>Double</option>
          <option value='Suite'>Suite</option>    
          <option value='Deluxe'>Deluxe</option>
        </select>
         </div>
         <div>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/night</span>
          </p>
          <input type='number' value={inputs.pricePerNight} onChange={e => setInputs({...inputs , pricePerNight: e.target.value})} placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24'/>
         </div>
      </div>
        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
          {Object.keys(inputs.amenities).map((amenity, index) => (
  <div key={index}>
    <input
      type='checkbox'
      id={`amenities${index+1}`}
      checked={inputs.amenities[amenity]}
      onChange={() =>
        setInputs({
          ...inputs,
          amenities: {
            ...inputs.amenities,
            [amenity]: !inputs.amenities[amenity],
          },
        })
      }
    />
    <label htmlFor={`amenities${index+1}`}> {amenity}</label>
  </div>
))}
        </div>
        <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'> Add Room</button>
      </form>
  )
}

export default AddRoom
