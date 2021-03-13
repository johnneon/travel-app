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
import DataAttractionsGallery from '../containers/DataAttractionsGallery';
import DataMediaPlayer from '../containers/DataMediaPlayer';

interface ParamTypes {
  id: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    background: theme.palette.primary.main,
  },
}));

const CountryPage: React.FunctionComponent = () => {
  const classes = useStyles();
  const { loading, error } = useTypedSelector((state) => state.country);
  const { id } = useParams<ParamTypes>();
  const { fetchCountry } = useAction();
  
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
      <DataAttractionsGallery />
      <DataMediaPlayer />
      <Box style={{height: 2000}} />
      <Link to={'/'}>Back</Link>
    </Box>
  );
};

export default CountryPage;
