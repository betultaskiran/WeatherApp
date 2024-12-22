// CityDropdown.js
import React from "react";
import { useWeather } from "../Context/WeatherContext";

const cities = [
  "Istanbul",
  "Ankara",
  "Izmir",
  "Antalya",
  "Bursa",
  "Adana",
  "Trabzon",
];

const CityDropdown = () => {
  const { city, setCity } = useWeather();

  return (
    <select
      value={city}
      onChange={(e) => setCity(e.target.value)}
      style={{ padding: "10px", borderRadius: "5px" }}
    >
      {cities.map((cityName) => (
        <option key={cityName} value={cityName}>
          {cityName}
        </option>
      ))}
    </select>
  );
};

export default CityDropdown;
