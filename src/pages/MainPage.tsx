/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import { CountryCard } from '../components/CountryCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
interface IMainPageProps {
}

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: 'url(https://i.pinimg.com/originals/ec/11/7a/ec117a2614aad453a8b8f1a7d00cb7ce.jpg) center no-repeat',
    backgroundSize: 'cover',
    boxShadow: 'inset 0 0 140px 120px rgb(0, 0, 0, .5)',
  }
});

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const classes = useStyles();
  const { countries, loading, error } = useTypedSelector((state) => state.countries);
  const { fetchAllCountries } = useAction();

  useEffect(() => {
    fetchAllCountries();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error is {error}</h1>
  }

  const cards = countries.map((country) => {
    const { id, name, capital, imageUrl } = country;
    return (
      <CountryCard
        name={name} id={id}
        capital={capital}
        imageUrl={imageUrl}
        key={country.id}
      />
    )
  });

  const settings = {
    dots: true,
    variableWidth: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1
  };

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
        <Slider {...settings}>
          {cards}
          {cards}
          {cards}
        </Slider>
      </Container>
    </Box>
  );
};

export default MainPage;
