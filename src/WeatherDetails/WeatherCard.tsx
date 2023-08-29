import React from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../api/getWeatherApi";

const WeatherCard = ({
    weather: {
        details,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
        timeZone,
    }
}) => {
    return (
        <div>
            <div className="flex items-center text-white justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>
            <div className="flex items-center justify-between">
                <img src={iconUrlFromCode(icon)} alt="" className="w-20"/>
                <p className="text-white">{temp.toFixed()}°C</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center text-white">
                        <UilTemperature size={18} className="mr-1" />
                        Real feel: 
                        <span className="font-medium ml-1">{feels_like.toFixed()}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center text-white">
                        <UilTear size={18} className="mr-1" />
                        Humidity: 
                        <span className="font-medium ml-1">{humidity}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center text-white">
                        <UilWind size={18} className="mr-1" />
                        Wind: 
                        <span className="font-medium ml-1">{speed} km/h</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center my-1 text-white space-x-2">
                  <UilSun />
                  <p>Rise: 04:50 AM | </p>
                  <UilSunset />
                  <p>Set: 09:50 AM | </p>
                  <UilArrowUp />
                  <p>High: 21° | </p>
                  <UilArrowDown />
                  <p>low: 17° </p>
            </div>
        </div>
        
    )
}
export default WeatherCard;