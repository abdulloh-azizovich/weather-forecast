import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=f8cbd2bb390543c88b285453211805&q=Uzbekistan&aqi=no')
    .then(data=> setWeather(data))
  }, [])

  console.log(weather)

  function inputHandler(event){
    setInput(event.target.value)
  }
  function search(){
    axios.get(`http://api.weatherapi.com/v1/current.json?key=f8cbd2bb390543c88b285453211805&q=${input}&aqi=no`)
    .then(data=> setWeather(data))
  }
  return (
    <div className='app'>     
        <h1>Прогноз погоды</h1>
          <input onChange={inputHandler} />
          <button onClick={search}>OK</button>
      {weather && (
          <div className='info'>
            <h1>{weather.data.location.name}</h1>
            <img src={weather.data.current.condition.icon}  />
            <h2>{weather.data.current.condition.text}</h2>
            <h1>{weather.data.current.temp_c}℃</h1>
          </div>
        )}

    </div>
  );
}

export default App;
