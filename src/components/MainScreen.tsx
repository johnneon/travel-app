import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import { Parallax } from 'react-parallax';

interface IMainScreenProps {
  description: string;
  imageUrl: string;
  name: string;
  capital: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    height: '100vh',
    paddingTop: 90,
    color: theme.palette.primary.contrastText,
    boxShadow: `inset 0px -500px 370px -100px ${theme.palette.primary.main}`,
  },
  font: {
    fontFamily: "'Caveat', cursive",
    color: theme.palette.secondary.main,
  },
}));

const MainScreen: React.FunctionComponent<IMainScreenProps> = ({ description, imageUrl, name, capital }) => {
  const classes = useStyles();

  return (
    <Parallax
      bgImage={imageUrl}
      bgImageAlt="Country image"
      strength={500}
      blur={{ min: -15, max: 15 }}
    >
      <Grid
        className={classes.wrap}
        container
        justify="center"
        alignItems="center"
      >
        <Container>
          <Box>
            <Typography variant="h1">{name}</Typography>
            <Typography className={classes.font} variant="h2">Capital: {capital}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Box>
        </Container>
      </Grid>
    </Parallax>
  );
};

export default MainScreen;
