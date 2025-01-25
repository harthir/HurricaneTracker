import { useState } from 'react';
import './App.css';
import './Weather.css'; // Import the CSS file

// API configuration
const api = {
  key: '008a3892a39761fbc840c5c7e15197f2',
  base: 'https://api.openweathermap.org/data/2.5/',
  weatherBase: 'https://api.openweathermap.org/data/3.0/onecall?',
};

interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  coord: { lat: number; lon: number };
  weather: [{ description: string; icon:string }];
  dt:number
  // Add other fields from the response if needed
}

interface LatLon{
    daily:{temp:{day:number, night:number}, dt:number, summary:string}[]

}

export default function Weather() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState<Weather | null>(null);
  const [temp, setTemp] = useState<LatLon | null>(null);

  // Fetch weather data for the city and update the state
  const searchPressed = () => {
    console.log(search);
  
    // Fetch current weather data
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(`Result: ${result}`);
        setWeather(result);
  
        // Fetch forecast data only if weather data is successfully retrieved
        if (result?.coord) {
          const { lat, lon } = result.coord;
          fetch(
            `${api.weatherBase}lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
          )
            .then((res) => res.json())
            .then((result) => {
              setTemp(result);
              console.log(result); // Log the forecast data
            })
            .catch((error) => console.error('Error fetching forecast:', error));
        }
      })
      .catch((error) => console.error('Error fetching weather:', error));
  };

  function convertToEST(timestamp:number) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
  
    // Convert to EST by subtracting 5 hours (5 * 60 * 60 * 1000)
    const estOffset = 5 * 60 * 60 * 1000;
    const estDate = new Date(date.getTime() - estOffset);
  
    // Format the date in readable form
    return estDate.toLocaleString("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }

 

  return (
    <div className="weather-container">
      {/* Header and image */}
      <div className="image-container">
        <h1 id="heading">Weekly Weather</h1>
        <img id="imageWeather" src="hurricane.jpg" alt="Weather" />
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      {/* Display Weather Information */}
      <div className = "fullWeather">

      <div className="current-weather-info">

            
        
        
        <h2 className = "today">Today's Weather</h2>
        <img src = {`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}></img>
      
        <p>{weather?.name || 'No city selected'}</p>
        <p>{weather?.dt ? convertToEST(weather.dt) : 'No city selected'}</p>
        <p><b>Temperature:</b> {weather ? `${weather.main.temp}°C` : 'No city selected'}</p>
        <p><b>Description: </b>{weather?.weather[0].description || 'No description available'}</p>
        
      </div>

    <br></br>
    <h2 className = "today">Next Week Weather</h2>
      <div className = "weekly-weather">

      {temp?.daily.map((days, index) => (
            <div key={index} className="weekly-day">
              <p id = "day-header">
                <b>Day {index + 1}:</b></p>
            <p> {days.temp.day}°C (Day), {days.temp.night}°C (Night)
              </p>
              <p>{convertToEST(days.dt)}</p>
              <p>{days.summary}</p>
            </div>
          ))}


      </div>


      </div>
      
    </div>
  );




}