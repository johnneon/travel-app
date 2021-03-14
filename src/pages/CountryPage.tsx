/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import {
  Backdrop,
  Box,
  CircularProgress,
  makeStyles,
  Theme,
  Paper
} from '@material-ui/core';
import DataMainScreen from '../containers/ DataMainScreen';
import DataMediaPlayer from '../containers/DataMediaPlayer';
import MapWithCoords from '../containers/MapWithCoords';
import WidgetPanel from '../components/WidgetPanel';

interface ParamTypes {
  id: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    background: theme.palette.primary.main,
    position: 'relative',
  },
}));

const CountryPage: React.FunctionComponent = () => {
  const classes = useStyles();
  const { id } = useParams<ParamTypes>();
  const { country, laguage } = useTypedSelector((state) => state);
  const { fetchCountry } = useAction();
  const { loading, error } = country;
  const { dictionary, lang } = laguage;
  
  useEffect(() => {
    fetchCountry(id, lang);
  }, [id, lang]);

  if (loading) {
    return (
      <Paper style={{height: '100vh'}}>
        <Backdrop open={loading}>
          <CircularProgress color="secondary" />
        </Backdrop>
      </Paper>
    )
  }

  if (error) {
    console.warn(error);
  }

  return (
    <Box className={classes.wrap}>
      <DataMainScreen />
      <DataMediaPlayer />
      <MapWithCoords />
      <WidgetPanel />
      <Link to={'/'}>{dictionary.BACK}</Link>
    </Box>
  );
};

export default CountryPage;
