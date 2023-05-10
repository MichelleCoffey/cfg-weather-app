import React from 'react'

const api = {
    key: "36ffa85294264ac7d94239e6938bd968",
    base: "https://api.openweathermap.org/data/2.5/"
  }

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

export const SearchBox = () => {
  return (
    <div>SearchBox</div>
  )
}
