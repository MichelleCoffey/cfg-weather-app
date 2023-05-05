import React, { useState } from 'react';
import { LocationBox } from './components/LocationBox';

import './App.css';

const api = {
  key: "36ffa85294264ac7d94239e6938bd968",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <LocationBox />
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
        {(typeof weather.main != "undefined") ? (
        <div className="bottom">
            <div className="feels">
            {weather.main ? <p className='bold'>{weather.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
              
            </div>
            <div className="humidity">
            {weather.main ? <p className='bold'>{weather.main.humidity}%</p> : null}
              <p>Humidity</p>
              
            </div>
            <div className="wind">
            {weather.wind? <p className='bold'>{weather.wind.speed.toFixed()}KM/H</p> : null}
              <p>Wind Speed</p>
              
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}


export default App;
