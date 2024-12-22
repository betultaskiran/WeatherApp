// WeatherCard.js
import React from "react";
import "./WeatherCard.css"; // CSS dosyasını import ediyoruz

const WeatherCard = ({ day, index }) => {
  const daysOfWeek = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
  const date = new Date();
  date.setDate(date.getDate() + index);

  return (
    <div className={`weather-card ${index === 0 ? "today" : ""}`}>
      <h4 className="day-name">{daysOfWeek[date.getDay()]}</h4>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p className="temperature">
        {Math.round(day.main.temp)}° / {Math.round(day.main.temp)}°
      </p>
    </div>
  );
};

export default WeatherCard;
