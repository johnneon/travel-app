import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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

const MainSlider: React.FunctionComponent = (props) => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    speed: 500,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    focusOnSelect: false,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next)
  };

  return (
    <>
      <Slider {...settings} className={classes.slider}>
        {props.children}
      </Slider>
      <p>{currentSlide}</p>
    </>
  );
};

export default MainSlider;
