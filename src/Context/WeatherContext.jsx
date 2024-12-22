import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Istanbul"); 
  const [forecast, setForecast] = useState([]); 

  const fetchWeather = async (selectedCity) => {
    const apiKey = "2105fbc0ef3c94a8a773d2d7212a6828"; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&appid=${apiKey}`
      );
      const data = response.data;

      // Filter to get the forecast for the first day of each 3-hour block (8 values per day)
      const dailyForecast = data.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5);

      // Set the fetched forecast data to the state
      setForecast(dailyForecast);
      console.log("Dailyyy", dailyForecast);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather(city); 
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, forecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
