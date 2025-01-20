import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Weather from "./components/Weather";
import Footer from "./components/footer";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      if (!city) {
        setError("Please enter a city name.");
        return;
      }
      const apiKey = "345201e1179549d7891151332242711";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setWeather(null);
      if (err.response && err.response.status === 403) {
        setError("Invalid API Key or access forbidden.");
      } else {
        setError("City not found. Please try again.");
      }
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main">
        <h1>Weather App</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Get Weather</button>
        </div>
        {error && <p className="error">{error}</p>}
        {weather && <Weather weather={weather} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;