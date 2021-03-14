/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

interface WeatherProps {
  cityName: string;
  labels?: {
    today: string;
    feels: string;
    windSpeed: string;
    windSpeedUnit: string;
    airHumidity: string;
  };
}

const useStyles = makeStyles(() => ({
  weatherContainer: {
    width: "40vh",
    minHeight: "30vh",
    backgroundColor: "#2b374f",
    opacity: 0.6,
    borderRadius: 20,
    fontSize: "2vh",
  },
  temperatureHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3vh",
    paddingTop: "50px",
    marginBottom: "30px",
  },
  metrics: {
    textAlign: "center",
    lineHeight: "3vh",
  },
}));

const tSign = "° C";

const Weather: React.FunctionComponent<WeatherProps> = ({
  cityName,
  labels = {
    today: "Today",
    feels: "Feels like",
    windSpeed: "Wind speed is",
    windSpeedUnit: "m/s",
    airHumidity: "Air humidity",
  },
}) => {
  const classes = useStyles();

  const [weatherData, setWeatherData] = useState<any>({});
  const getWeather = async () => {
    const apiKey = "eb7290df8210ec1e343811c44b869b32";
    const lang = "en";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&&lang=${lang} `;
    const response = await fetch(url);
    const data = await response.json();

    setWeatherData(data);
  };

  useEffect(() => {
    cityName && getWeather();
  }, []);

  return weatherData.main ? (
    <div className={classes.weatherContainer}>
      <div className={classes.temperatureHolder}>
        <img
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather icon"
        />
        <div>
          {weatherData.main.temp.toFixed()}
          {tSign}
        </div>
      </div>
      <div className={classes.metrics}>
        {labels.today} {weatherData.weather[0].description}
      </div>
      <div className={classes.metrics}>
        {labels.feels} {weatherData.main.feels_like.toFixed()}
        {tSign}
      </div>
      <div className={classes.metrics}>
        {labels.windSpeed} {weatherData.wind.speed} {labels.windSpeedUnit}
      </div>
      <div className={classes.metrics}>
        {labels.airHumidity} {weatherData.main.humidity}%
      </div>
    </div>
  ) : null;
};

export default Weather;
