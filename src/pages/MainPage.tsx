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
  CircularProgress,
  Paper
} from '@material-ui/core';
import MainSlider from '../components/MainSlider';
import CountryCard from '../components/CountryCard';

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 'calc(100vh - 204px)',
    minWidth: '100vw',
    paddingTop: 100,
    background: '#0277bd url(assets/images/first-screen.jpg) center no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'soft-light',
    boxShadow: 'inset 0 0 150px 10px rgb(0, 0, 0, .5)',
  },
  font: {
    fontFamily: "'Caveat', cursive",
  },
});

const MainPage: React.FunctionComponent = () => {
  const classes = useStyles();
  const state = useTypedSelector((state) => state);
  const { countries, loading, error } = state.countries;
  const { DOSCOVER, PLANET, WITH, TRAVEL_APP } = state.laguage.dictionary;
  const { fetchAllCountries } = useAction();

  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (loading) {
    return (
      <Paper style={{height: '100vh'}}>
        <Backdrop open={loading}>
          <CircularProgress color="secondary" />
        </Backdrop>
      </Paper>
    )
  }

  if (error) {
    console.warn(error);
  }

  return (
    <Box className={classes.wrap}>
      <Container>
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          {DOSCOVER} <Typography
            align="center"
            color="secondary"
            variant="h1"
            component="span"
            className={classes.font}
          >{PLANET}</Typography>
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
          >{WITH} </Typography>
          {TRAVEL_APP}
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
