import React from 'react';
import { iconUrlFromCode } from '../api/getWeatherApi';

function Forecast({title, items}) {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className='font-medium text-white uppercase'>{title}</p>
        </div>
        <hr className='my-2 text-white' />
        <div className="flex flex-row items-center justify-between text-white">
        {items.map((item)=>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="" className="w-12 my-1"/>
                <p>{item.temp}</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default Forecast