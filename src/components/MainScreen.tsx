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
import { useTypedSelector } from '../hooks/typedSelector.hook';

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
    '@media(max-width: 514px)': {
      height: 'auto',
    }
  },
  font: {
    fontFamily: "'Caveat', cursive",
    color: theme.palette.secondary.main,
  },
  textContainer: {
    paddingBottom: theme.spacing(10),
    margin: '0 auto',
    textAlign: 'center',
    '@media(max-width: 514px)': {
      textAlign: 'left',
      paddingBottom: theme.spacing(0),
      paddingTop: theme.spacing(20),
    }
  }
}));

const MainScreen: React.FunctionComponent<IMainScreenProps> = ({ description, imageUrl, name, capital }) => {
  const classes = useStyles();
  const { dictionary } = useTypedSelector((state) => state.laguage);
  const { COUNTRY, CAPITAL } = dictionary;

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
        alignItems="flex-end"
      >
        <Container>
          <Box className={classes.textContainer}>
            <Typography variant="h1">
              {COUNTRY}: 
              <Typography component="span" className={classes.font} variant="h1">
                {name}
              </Typography>
            </Typography>
            <Typography variant="h2">
              {CAPITAL}: 
              <Typography component="span" className={classes.font} variant="h2">
                {capital}
              </Typography>
            </Typography>
            <Typography component="p" variant="h5">{description}</Typography>
          </Box>
        </Container>
      </Grid>
    </Parallax>
  );
};

export default MainScreen;
