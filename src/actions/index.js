import axios from 'axios';
const API_KEY = '24b6f69be6792a87687f5167d180de97';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const WEATHER_URL = `${ROOT_URL}&q=${city},us`;
  console.log(`weather url is ${WEATHER_URL}`);

  const request = axios.get(WEATHER_URL);
  console.log('request inside action creator is '+request);

  return {
     type: FETCH_WEATHER,
     payload:request,
  };
}
