/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import {
  FullScreen,
  useFullScreenHandle,
  FullScreenHandle,
} from "react-full-screen";
import { Container, makeStyles, Theme, IconButton, Box, Typography } from '@material-ui/core';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import ZoomControl from 'mapbox-gl-controls/lib/zoom';
import LanguageControl from 'mapbox-gl-controls/lib/language';
import { useTypedSelector } from '../hooks/typedSelector.hook';
import { variables } from '../data/variables';

const accessToken = variables.MAP_TOKEN;
const stylesLink = variables.MAP_STYLE_LINK;

mapboxgl.accessToken = accessToken;

interface IMapProps {
  coordinates: number[]
}

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    width: '100%',
    height: 500,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    position: 'relative',
  },
  'map-container': {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  fullScreenBtn: {
    color: theme.palette.primary.contrastText,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
}));

const Map: React.FunctionComponent<IMapProps> = ({ coordinates }) => {
  const classes = useStyles();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [lng, lat] = coordinates;
  const screen: FullScreenHandle = useFullScreenHandle();
  const [fullScreen, setFullScreen] = useState<boolean>(screen.active);
  const { dictionary, lang } = useTypedSelector((state) => state.laguage);
  const { ON_THE_MAP } = dictionary;

  const handleChange = useCallback((fullScreen: boolean, screen: FullScreenHandle) => {
    setFullScreen(screen.active);
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: stylesLink,
      center: [lng, lat],
      zoom: 9,
    });

    const languageControl = new LanguageControl({
      language: lang,
    });

    map.addControl(new ZoomControl(), 'bottom-right');
    map.addControl(languageControl);
   
    new mapboxgl.Marker({ color: '#ff1744' })
      .setLngLat([lng, lat])
      .addTo(map);

    return () => map.remove();
    }, [lang]);

  return (
    <Container>
      <Typography variant="h3" color="textPrimary">{ON_THE_MAP}</Typography>
        <Box className={classes.wrap}>
          <FullScreen handle={screen} onChange={handleChange}>
            <IconButton
              onClick={!fullScreen ? screen.enter : screen.exit}
              className={classes.fullScreenBtn}
            >
              {!fullScreen
              ? <FullscreenIcon />
              : <FullscreenExitIcon />}
            </IconButton>
            <div className={classes['map-container']} ref={mapContainer} />
          </FullScreen>
        </Box>
    </Container>
  );
};

export default Map;
