/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
    background: '#0277bd url(assets/images/first-screen.jpg) center no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'soft-light',
    boxShadow: 'inset 0 0 150px 10px rgb(0, 0, 0, .5)',
  },
  slider: {
    '& .slick-next': {
      top: 'auto',
      right: 'auto',
      bottom: -40,
      left: 50,
      zIndex: 1,
      '&:before': {
        fontSize: 40
      },
    },
    '& .slick-prev': {
      top: 'auto',
      right: 'auto',
      bottom: -40,
      left: 0,
      zIndex: 1,
      '&:before': {
        fontSize: 40
      },
    }
  }
});

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  const classes = useStyles();
  const { countries, loading, error } = useTypedSelector((state) => state.countries);
  const { fetchAllCountries } = useAction();
  const [currentSlide, setcurrentSlide] = useState<number>(0);

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
    speed: 500,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    focusOnSelect: false,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setcurrentSlide(next)
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
        <Slider {...settings} className={classes.slider}>
          {cards}
          {cards}
          {cards}
        </Slider>
      </Container>
    </Box>
  );
};

export default MainPage;
