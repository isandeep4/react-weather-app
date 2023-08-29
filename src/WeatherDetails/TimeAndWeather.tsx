import React from 'react'
import { formatToLocalTime } from '../api/getWeatherApi'

function TimeAndWeather({weather: {dt, timeZone, name, country}}:any) {
  return (
    <div>
    <div className="flex flex-row justify-center my-6">
        <p className="text-white text-xl font-extralight">{formatToLocalTime(dt, timeZone)} </p>
    </div>
    <div className="flex flex-row justify-center my-6">
        <p className="text-white text-3xl font-medium">{`${name} ${country}`}</p>
    </div>
</div>
  )
}

export default TimeAndWeather