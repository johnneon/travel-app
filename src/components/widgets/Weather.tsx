/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { IRootState } from '../../store/redusers';
import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";

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

const useStyles = makeStyles((theme: Theme) => ({
  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0 0 20px 0px rgb(255, 255, 255, .5)',
    borderRadius: 20,
    margin: theme.spacing(2),
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
    <Grid item className={classes.weatherContainer}>
      <Grid container justify="center" alignItems="center">
      <img
          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt="Weather icon"
        />
        <Typography align="center" variant="h4" color="textPrimary">
          {weatherData.main.temp.toFixed()} {tSign}
        </Typography>
      </Grid>
      <Typography align="center" variant="h5" color="textPrimary">
        {labels.today} {weatherData.weather[0].description}
      </Typography>
      <Typography color="textPrimary" align="center" variant="h5">
        {labels.feels} {weatherData.main.feels_like.toFixed()}
        {tSign}
      </Typography>
      <Typography color="textPrimary" align="center" variant="h5">
        {labels.windSpeed} {weatherData.wind.speed} {labels.windSpeedUnit}
      </Typography>
      <Typography color="textPrimary" align="center" variant="h5">
        {labels.airHumidity} {weatherData.main.humidity}%
      </Typography>
    </Grid>
  ) : null;
};

const mapStateToProps = (state: IRootState) => {
  const { capital } = state?.country?.country;

  return {
    cityName: capital,
  };
};

export default connect(
  mapStateToProps
)(Weather);
