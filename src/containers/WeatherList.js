import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../components/WeatherChart';
import City from '../components/City';

class WeatherList extends Component {

  // rendering single row of city data
  renderWeather(cityData){

    console.log(cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp )
    const pressure = cityData.list.map( weather => weather.main.pressure )
    const humidity = cityData.list.map( weather => weather.main.humidity )
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={name}>
        <td> <City name={name} lon={lon} lat={lat}/> </td>
        <td> <WeatherChart data={temps} color="Red" units="K"/> </td>
        <td> <WeatherChart data={pressure} color="blue" units="hPa"/> </td>
        <td> <WeatherChart data={humidity} color="orange" units="%" /> </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          { this.props.weather.map( (this.renderWeather) ) }
        </tbody>
      </table>
    );

  }
}

function mapStateToProps({weather}){
  return { weather };  // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
