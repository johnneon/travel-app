import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  withStyles,
  makeStyles,
  createStyles,
  LinearProgress,
  Grid,
  Typography,
  Theme
} from '@material-ui/core';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.light,
    },
  }),
)(LinearProgress);

const useStyles = makeStyles({
  slider: {
    '& .slick-next': {
      top: 'auto',
      right: 'auto',
      bottom: -40,
      left: 50,
      zIndex: 1,
      '&:before': {
        fontSize: 40,
      },
      '@media(max-width: 600px)': {
        bottom: -30,
      },
      '@media(max-width: 514px)': {
        left: 25,
        bottom: -37,
        '&:before': {
          fontSize: 25,
        }
      },
    },
    '& .slick-prev': {
      top: 'auto',
      right: 'auto',
      bottom: -40,
      left: 0,
      zIndex: 1,
      '&:before': {
        fontSize: 40,
      },
      '@media(max-width: 600px)': {
        bottom: -30,
      },
      '@media(max-width: 514px)': {
        bottom: -37,
        '&:before': {
          fontSize: 25,
        }
      },
    }
  },
  progress: {
    width: '100%',
  },
  current: {
    fontFamily: "'Caveat', cursive",
  },
  subBar: {
    '@media(max-width: 1100px)': {
      paddingLeft: 30,
    },
    '@media(max-width: 950px)': {
      paddingLeft: 60,
    },
    '@media(max-width: 750px)': {
      paddingLeft: 90,
    },
    '@media(max-width: 514px)': {
      paddingLeft: 58,
    },
  }
});

const MainSlider: React.FunctionComponent = (props) => {
  const classes = useStyles();
  let sliderRef: any = useRef(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const calculateValue = () => {
    const percent = 100;
    if (props?.children && Array.isArray(props.children)) {
      return +(percent / props.children.flat().length * (currentSlide + 1));
    }
  };

  const progress = calculateValue();

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
      <Slider ref={sliderRef} {...settings} className={classes.slider}>
        {props.children}
      </Slider>
      <Grid
        container
        spacing={3}
        justify='flex-end'
        alignItems='center'
        className={classes.subBar}
      >
        <Grid item xs={9} sm={10} md={10}>
          <BorderLinearProgress
            className={classes.progress}
            variant='determinate' value={progress}
            aria-labelledby='continuous-slider'
          />
        </Grid>
        <Grid item>
          <Typography className={classes.current} variant='h3' color='textPrimary'>
          <Typography className={classes.current} variant='h3' component='span' color='secondary'>
            {currentSlide + 1}
          </Typography>
            /6
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default MainSlider;
