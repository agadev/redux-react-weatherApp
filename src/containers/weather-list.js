import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
 renderList(cityData) {

   console.log('city data is '+JSON.stringify(cityData.city.name));
   const temps = cityData.list.map(weather => weather.main.temp - 273);
   const pressures = cityData.list.map(weather => weather.main.pressure);
   const humidities = cityData.list.map(weather => weather.main.humidity);
   const {lon,lat} = cityData.city.coord;

   console.log(`temp =${temps}`);
      return (
      <tr key={cityData.city.name}>
      <td> <GoogleMap lon={lon} lat={lat} /></td>
      <td> <Chart data={temps} color="purple" units="C"/> </td>
      <td> <Chart data={pressures} color="green" units="hPa"/> </td>
      <td> <Chart data={humidities} color="orange" units="%"/> </td>
      </tr>
      );
 }

 render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>CITY</th>
                    <th>TEMPERATURE (C)</th>
                    <th>PRESSURE (hPa)</th>
                    <th>HUMIDITY (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.weather.map(this.renderList)}
                </tbody>
              </table>
              </div>
          </div>
      </div>
  </div>
    );
  }

}

function mapStateToProps(state){
  return {
    weather:state.weather
  };
}

export default connect(mapStateToProps) (WeatherList);
