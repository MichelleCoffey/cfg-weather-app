import React from "react";
import './App.css';
const api = {
  key: "36ffa85294264ac7d94239e6938bd968",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
        <div className="location-box">
          <div className="location"></div>
          <div className="date"></div>
        </div>
        <div className="weather-box">
          <div className="temp"></div>
          <div className="weather"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
