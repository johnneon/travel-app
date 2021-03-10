import React, { useState } from 'react';
import {
  Typography,
  Link as StyledLink,
  makeStyles,
  Theme,
  Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';


export interface ICountryCardProps {
  id: string;
  name: string;
  capital: string;
  imageUrl: string;
}

const cardWidth = 300;
const cardHeight = 400;

const useStyles =makeStyles((theme: Theme) => ({
  wrap: {
    perspective: 1000,
    transformStyle: 'preserve-3d',
    padding: theme.spacing(3),
    position: 'relative',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: cardWidth,
    height: cardHeight,
    padding: theme.spacing(2),
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: 'local',
    backgroundSize: 'cover',
    borderRadius: '10px',
    transition: 'transform .1s',
    transformStyle: 'preserve-3d',
    perspective: 2000,
    boxShadow: '0 10px 20px 1px rgb(0, 0, 0, .5)',
    overflow: 'hidden',
    '&:hover': {
      textDecoration: 'none',
      transform: 'scale(1.05)'
    },
    '@media(max-width: 514px)': {
      width: 230,
      height: 330,
      margin: theme.spacing(1.5),
      boxShadow: '0 5px 15px 1px rgb(0, 0, 0, .5)',
    },
  },
  image: {
    display: 'block',
    height: '120%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'transform .2s',
    transformStyle: 'preserve-3d',
  },
  text: {
    position: 'relative',
    zIndex: 1,
    transition: 'transform .5s',
  },
  link: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: 1,
    color: 'transparent',
  },
  shadows: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'box-shadow .5s',
    boxShadow: 'inset 0 -120px 30px -3px rgb(0, 0, 0, .5)',
    '@media(max-width: 514px)': {
      boxShadow: 'inset 0 -100px 25px -3px rgb(0, 0, 0, .5)',
    },
  },
  hoverShadows: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    transition: 'box-shadow .5s',
    boxShadow: 'inset 0 0px 20px 10px rgb(0, 0, 0, .5)',
    '@media(max-width: 514px)': {
      boxShadow: 'inset 0 0px 15px 5 rgb(0, 0, 0, .5)',
    },
  }
}));

const CountryCard: React.FunctionComponent<ICountryCardProps> = (props) => {
  const classes = useStyles();
  const { id, name, capital, imageUrl } = props;
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [translate, setTranslate] = useState<number>(0);
  const [shadows, setShadows] = useState<boolean>(false);

  const mouseMoveHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    const margin = 30;
    const transition = 10;
    const upScale = 1.1;
    const upTranslate = 20;

    const halfWidth = (cardWidth + margin) / 2;
    const halfHeight = (cardHeight + margin) / 2;

    let xAxis = +(-((halfWidth - event.nativeEvent.offsetX) / transition)).toFixed(1);
    let yAxis = +((halfHeight - event.nativeEvent.offsetY) / transition).toFixed(1);

    setRotateX(yAxis);
    setRotateY(xAxis);
    setScale(upScale);
    setTranslate(upTranslate);
    setShadows(true);
  }

  const mouseOutHandler = () => {
    setScale(1);
    setTranslate(0);
    setRotateX(0);
    setRotateY(0);
    setShadows(false);
  }

  const { wrapper, text, image } = {
    wrapper: {
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    },
    text: {
      transform: `scale(${scale}) translate(${translate}px, ${translate * -1}px)`,
    },
    image: {
      transform: `rotateX(${rotateX / 1.2}deg) rotateY(${rotateY / 1.2}deg) translate(-50%, -50%)`,
    },
  }

  return (
    <Box className={classes.wrap} >

      <Box
        className={classes.card}
        style={wrapper}
      >
        <Typography
          style={text}
          color="textPrimary"
          className={classes.text} variant="h3"
        >
            {name}
        </Typography>

        <Typography
          style={text}
          color="textPrimary"
          className={classes.text} variant="h4"
        >
            {capital}
        </Typography>
        <img
          src={imageUrl}
          alt="Card"
          className={classes.image}
          style={image}
        />
        <Box className={shadows ? classes.hoverShadows : classes.shadows}></Box>
      </Box>

      <StyledLink
        className={classes.link}
        component={Link}
        to={`/country/${id}`}
        onMouseMove={mouseMoveHandler}
        onMouseOut={mouseOutHandler}
      >&nbsp;</StyledLink>
    </Box>
  );
}

export default CountryCard;