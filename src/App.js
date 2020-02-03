import React from 'react';
import './App.css';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9e516561c5be2523b9ff275d6dcbf210";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);

    const data = await api_call.json();

    console.log(data);
    if (city && country) {
      this.setState(
        {
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        }
      )
    } else {
      this.setState(
        {
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter a valid location"
        }
      )
    }

  }

  render() {
    return (
      <div className="wrapper d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row app-card-container">
            <div className="col-md-5 h-100 bg-weather d-flex justify-content-center align-items-center p-3 text-white">
              <div>
              <Titles/>
              </div>
             
            </div>
            <div className="col-md-7 weather-card d-flex justify-content-center align-items-center bg-dark">
              <div >
              <Weather 
                  
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
                <Form getWeather={this.getWeather} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
