/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAction } from '../hooks/action.hook';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import {
  Backdrop,
  Box,
  CircularProgress,
  makeStyles,
  Theme,
  Paper,
} from '@material-ui/core';
import DataMainScreen from '../containers/ DataMainScreen';
import DataAttractionsGallery from '../containers/DataAttractionsGallery';
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
  backdrop: {
    zIndex: theme.zIndex.snackbar + 1,
    color: '#fff',
  },
}));

const CountryPage: React.FunctionComponent = () => {
  const classes = useStyles();
  const { id } = useParams<ParamTypes>();
  const { country, language } = useTypedSelector((state) => state);
  const { fetchCountry } = useAction();
  const { loading, error } = country;
  const { lang } = language;
  
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
      <DataAttractionsGallery />
      <DataMediaPlayer />
      <MapWithCoords />
      <WidgetPanel />
      <Backdrop open={loading} className={classes.backdrop}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Box>
  );
};

export default CountryPage;
