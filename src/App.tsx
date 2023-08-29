import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import WeatherCard from './WeatherDetails/WeatherCard';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Input from './Input/Input';
import TimeAndWeather from './WeatherDetails/TimeAndWeather';
import Forecast from './WeatherDetails/Forecast';
import { getFormattedWeatherData } from './api/getWeatherApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [query, setQuery] = useState({q: 'london'});
  const [units, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null);
  useEffect(()=>{
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.';
      toast.info('Fetching the weather for ' + message)
      await getFormattedWeatherData({...query, units}).then((data:any)=>
      setWeather(data))}
      fetchWeather();
  },[query, units])

  return (
    <div className="mx-64 mx-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Header setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnit={setUnit} />
      {weather && (<div>
        <TimeAndWeather weather={weather}/>
        <WeatherCard weather={weather} />
        <Forecast title={'HOURLY FORECAST'} items={(weather as any).hourly} />
        <Forecast title={'Daily FORECAST'} items={(weather as any).daily} />
      </div>)}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;
