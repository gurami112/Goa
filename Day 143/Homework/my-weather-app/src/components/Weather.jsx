const Weather = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h2>{weather.location.name}</h2>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="weather-icon"
      />
      <p>{weather.current.condition.text}</p>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Humidity: {weather.current.humidity}%</p>
    </div>
  );
};

export default Weather;
