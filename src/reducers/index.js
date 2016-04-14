import { combineReducers } from 'redux';

import WeatherReducer from './ReducerWeather';

const rootReducer = combineReducers({
  // mapping to the state
  weather: WeatherReducer
});

export default rootReducer;
