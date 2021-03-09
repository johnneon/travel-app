/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import CountryCard from '../components/CountryCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import MainSlider from '../components/MainSlider';
interface IMainPageProps {
}

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: '#0277bd url(assets/images/first-screen.jpg) center no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'soft-light',
    boxShadow: 'inset 0 0 150px 10px rgb(0, 0, 0, .5)',
  },
});

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const classes = useStyles();
  const { countries, loading, error } = useTypedSelector((state) => state.countries);
  const { fetchAllCountries } = useAction();

  useEffect(() => {
    console.log('main page')
    fetchAllCountries();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
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
          variant="h3"
        >
            Routes
        </Typography>
        <MainSlider>
          {countries.map((country, ind) => {
            const { id, name, capital, imageUrl } = country;
            return (
              <CountryCard
                name={name} id={id}
                capital={capital}
                imageUrl={imageUrl}
                key={ind}
              />
            )
          })}
        </MainSlider>
      </Container>
    </Box>
  );
};

export default MainPage;
