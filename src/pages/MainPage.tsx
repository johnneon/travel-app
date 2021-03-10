/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Backdrop,
  CircularProgress
} from '@material-ui/core';
import MainSlider from '../components/MainSlider';
import CountryCard from '../components/CountryCard';

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    background: '#0277bd url(assets/images/first-screen.jpg) center no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'soft-light',
    boxShadow: 'inset 0 0 150px 10px rgb(0, 0, 0, .5)',
  },
  font: {
    fontFamily: "'Caveat', cursive",
  }
});

const MainPage: React.FunctionComponent = () => {
  const classes = useStyles();
  const { countries, loading, error } = useTypedSelector((state) => state.countries);
  const { fetchAllCountries } = useAction();

  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress color="secondary" />
      </Backdrop>
    )
  }

  if (error) {
    return <h1>Error is {error}</h1>
  }

  return (
    <Box className={classes.wrap}>
      <Container>
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          Discover the 
          <Typography
            align="center"
            color="secondary"
            variant="h1"
            component="span"
            className={classes.font}
          >
            planet
          </Typography>
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h3"
        >
          <Typography
            align="center"
            color="secondary"
            variant="h2"
            component="span"
            className={classes.font}
          >
            with 
          </Typography>
            Travel-app
        </Typography>
        <MainSlider>
          {countries.length > 0 ? countries.map((country, ind) => {
            const { id, name, capital, imageUrl } = country;
            return (
              <CountryCard
                name={name} id={id}
                capital={capital}
                imageUrl={imageUrl}
                key={ind}
              />
            )
          }) : ''}
          {countries.length > 0 ? countries.map((country, ind) => {
            const { id, name, capital, imageUrl } = country;
            return (
              <CountryCard
                name={name} id={id}
                capital={capital}
                imageUrl={imageUrl}
                key={ind}
              />
            )
          }) : ''}
          {countries.length > 0 ? countries.map((country, ind) => {
            const { id, name, capital, imageUrl } = country;
            return (
              <CountryCard
                name={name} id={id}
                capital={capital}
                imageUrl={imageUrl}
                key={ind}
              />
            )
          }) : ''}
        </MainSlider>
      </Container>
    </Box>
  );
};

export default MainPage;
