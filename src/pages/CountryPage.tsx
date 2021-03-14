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
  Theme
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
  const { BACK } = laguage.dictionary;
  
  useEffect(() => {
    fetchCountry(id);
  }, [id]);

  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress color="secondary" />
      </Backdrop>
    )
  }

  if (error) {
    return <h1>Error is {error}</h1>
  }

  return (
    <Box className={classes.wrap}>
      <DataMainScreen />
      <DataMediaPlayer />
      <MapWithCoords />
      <WidgetPanel />
      <Link to={'/'}>{BACK}</Link>
    </Box>
  );
};

export default CountryPage;
