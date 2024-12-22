// WeatherApp.js
import React from 'react';
import { useWeather } from "../Context/WeatherContext";
import WeatherCard from '../Components/WeatherCard';
import CityDropdown from '../Components/CityDropdown';

const WeatherApp = () => {
  const { forecast, city } = useWeather();

  return (
    <div style={{ padding: '20px' }}>
      <CityDropdown />
      <h2>{city} - 7 Günlük Hava Durumu</h2>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {forecast.map((day, index) => (
          <WeatherCard key={index} day={day} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
