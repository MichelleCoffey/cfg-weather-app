import React from "react";
import './App.css';
const api = {
  key: "36ffa85294264ac7d94239e6938bd968",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
        <div className="location-box">
          <div className="location">Cork</div>
          <div className="date">6th of December</div>
        </div>
        <div className="weather-box">
          <div className="temp">22°C</div>
          <div className="weather">Sunny</div>
        </div>
        <div className="bottom">
            <div className="feels">
          
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              
              <p>Humidity</p>
            </div>
            <div className="wind">
              
              <p>Wind Speed</p>
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
