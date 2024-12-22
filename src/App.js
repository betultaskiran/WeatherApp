// App.js
import React from "react";
import { WeatherProvider } from "../src/Context/WeatherContext";
import WeatherApp from "../src/Components/WeatherApp";
import "./App.css";

const App = () => {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
};

export default App;
