import React, { useState, useEffect } from 'react';
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
    marginRight: theme.spacing(2),
    background: `url(${imageUrl}) center no-repeat`,
    backgroundSize: 'cover',
    borderRadius: '10px',
    transition: 'transform .2s',
    '&:hover': {
      textDecoration: 'none',
    },
    '@media(max-width: 514px)': {
      width: 250,
      height: 350,
    },
  }
})))();

export function CountryCard (props: ICountryCardProps) {
  const classes = useStyles(props);
  const { id, name, capital } = props;
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const mouseMoveHandler = (event: React.MouseEvent) => {
    const halfHeight = 150;

    setRotateX(-(event.nativeEvent.offsetY - halfHeight) / 7);
    setRotateY((event.nativeEvent.offsetY - halfHeight) / 7);
  }

  const mouseOutHandler = (event: React.MouseEvent) => {
    setRotateX(0);
    setRotateY(0);
  }

  useEffect(() => {
    console.log(rotateX, rotateY);
  }, [rotateX, rotateY]);

  return (
    <Box className={classes.wrap}>
      <StyledLink
        className={classes.card}
        component={Link}
        color="textPrimary"
        to={`/country/${id}`}
        onMouseMove={mouseMoveHandler}
        onMouseOut={mouseOutHandler}
        style={{transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,}}
      >
        <Box>
          <Typography variant="h3" >{name}</Typography>
          <Typography variant="h4" >{capital}</Typography>
        </Box>
      </StyledLink>
    </Box>
  );
}
