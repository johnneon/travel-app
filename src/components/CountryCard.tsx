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

interface IStyleProps {
  imageUrl: string;
}

const useStyles = ({ imageUrl }: IStyleProps) => (makeStyles((theme: Theme) => ({
  wrap: {
    // height: 400,
    // width: 300,
    perspective: 1000,
    transformStyle: 'preserve-3d',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 300,
    height: 400,
    padding: theme.spacing(2),
    marginRight: theme.spacing(4),
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: 'cover',
    borderRadius: '10px',
    transition: 'transform .1s',
    transformStyle: 'preserve-3d',
    boxShadow: 'inset 0 -120px 30px -3px rgb(0, 0, 0, .5), 0 10px 20px 1px rgb(0, 0, 0, .5)',
    '&:hover': {
      textDecoration: 'none',
      transform: 'scale(1.05)'
    },
    '@media(max-width: 514px)': {
      width: 230,
      height: 330,
      margin: theme.spacing(1.5),
      boxShadow: 'inset 0 -100px 25px -3px rgb(0, 0, 0, .5), 0 5px 15px 1px rgb(0, 0, 0, .5)',
    },
  }
})))();

const CountryCard: React.FunctionComponent<ICountryCardProps> = (props) => {
  const classes = useStyles(props);
  const { id, name, capital, imageUrl } = props;
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const mouseMoveHandler = (event: React.MouseEvent) => {
    let xAxis = +(-(((300 / 2) - event.nativeEvent.offsetX) / 15)).toFixed(1);
    let yAxis = +(((430 / 2) - event.nativeEvent.offsetY) / 15).toFixed(1);
    console.log(yAxis);
    setRotateX(yAxis);
    setRotateY(xAxis);
  }

  const mouseOutHandler = (event: React.MouseEvent) => {
    setRotateX(0);
    setRotateY(0);
  }

  return (
    <Box className={classes.wrap} onMouseMove={mouseMoveHandler} onMouseOut={mouseOutHandler}>
      <StyledLink
        className={classes.card}
        component={Link}
        color="textPrimary"
        to={`/country/${id}`}
        style={{backgroundImage: `url(${imageUrl})`, transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}
      >
        <Typography variant="h3" >{name}</Typography>
        <Typography variant="h4" >{capital}</Typography>
      </StyledLink>
    </Box>
  );
}

export default CountryCard;