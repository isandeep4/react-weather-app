import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { UilLocationPinAlt } from '@iconscout/react-unicons';

const Input = ({setQuery, units, setUnit}) => {
    const [city, setCity] = useState('');
    const handleSearchClick = () => {
        if(city !== '') setQuery({q: city})
    }
    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
            setQuery({
                lat,
                lon,
            })
            })
        }
    };
    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit) setUnit(selectedUnit)
    }
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 justify-center space-x-4 items-center">
        <input 
            value={city}
            onChange={(e)=>setCity(e.currentTarget.value)}
            type='text' 
            placeholder="search for city..." 
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"/>
        <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick}/>
        <UilLocationPinAlt className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
      </div>
      <div className="flex flex-row w-1/4 justify-center items-center">
        <button name="metric" className="text-xl text-white font-light" onClick={handleUnitChange}>
            °C
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button name="imperial" className='text-xl text-white font-light' onClick={handleUnitChange} >°F</button>
      </div>
    </div>
  )
}

export default Input