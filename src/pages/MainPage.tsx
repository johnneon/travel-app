/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import { CountryCard } from '../components/CountryCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface IMainPageProps {
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}>
        {cards}
        {cards}
        {cards}
      </Slider>
    </>
  );
};

export default MainPage;
