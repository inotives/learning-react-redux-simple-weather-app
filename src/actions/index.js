import axios from 'axios';

const API_KEY = '9b7547f61cf734f627f1a98a5156cc0e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;




export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;

  // using axios to do an ajax
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
