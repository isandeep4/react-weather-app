import axios from 'axios';
import { DateTime } from 'luxon';

const API_KEY = '503c123247fce2b5d7e155260578c186';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function getWeatherData(path: string, params:any) {
  const url = new URL(BASE_URL + '/' + path);
  url.search= new URLSearchParams({...params, appid: API_KEY}).toString();
  const result = await fetch(url).then(result=>result.json());
  return result; 
}
const formatCurrentWeather = (data: any) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, humidity, temp_max, temp_min },
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed},
  } = data;
  const {main: details, icon} = weather[0];
  return {
    lat, lon, temp, feels_like, humidity, temp_max, temp_min, country, sunrise, sunset, details, icon, name, dt, speed
  }
}
const formatForcastWeather = (data: any) => {
  let { timeZone, daily, hourly} = data;
  daily = daily.slice(1,6).map((d)=>{
    return {
      title: formatToLocalTime(d.dt, timeZone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }
  });
  hourly = hourly.slice(1,6).map((d)=>{
    return {
      title: formatToLocalTime(d.dt, timeZone, 'hh:mm a'),
      temp: d.temp,
      icon: d.weather[0].icon,
    }
  })
  return {timeZone, daily, hourly};
}

export const getFormattedWeatherData = async (searchParams: any) => {
  const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
  const { lat, lon } = formattedCurrentWeather;
  const formattedForcastWeather = await getWeatherData('onecall', {
    lat,
    lon,
    exclude: "minutely",
    units: searchParams.units
  }).then(formatForcastWeather)
  return {...formattedCurrentWeather, ...formattedForcastWeather}
}
export const formatToLocalTime = (sec, timeZone, format="cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => 
  DateTime.fromSeconds(sec).setZone(timeZone).toFormat(format);
export const iconUrlFromCode = (code) =>
`http://openweathermap.org/img/wn/${code}@2x.png`;