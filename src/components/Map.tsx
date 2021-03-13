/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Container, makeStyles } from '@material-ui/core';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obm5lb24iLCJhIjoiY2ttN2k4OTU3MGo2ajJwbGFiY3A2b3Y4aSJ9.wlYxrWsTtkIaoijDwil0tw';

interface IMapProps {
  coordinates: number[]
}

const useStyles = makeStyles({
  wrap: {
    position: 'relative',
    width: '100%',
    height: 500,
  },
  'map-container': {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  }
});

const Map: React.FunctionComponent<IMapProps> = ({ coordinates }) => {
  const classes = useStyles();
  const mapContainer = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState('ru');
  const [lng, lat] = coordinates;
  console.log(coordinates);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current || '',
      style: 'mapbox://styles/johnneon/ckm7kyt6hg3ww17l94ba6ie94',
      center: [lng, lat],
      zoom: 9,
    });
    setTimeout(() => {
      map.setLayoutProperty('country-label', 'text-field', [
        'get',
        'name_' + lang,
      ]);
    }, 1000);
    const marker = new mapboxgl.Marker({ color: '#ff1744' })
        .setLngLat([lng, lat])
        .addTo(map);
    return () => map.remove();
    }, []);

  return (
    <Container>
      <div className={classes.wrap}>
        <div className={classes['map-container']} ref={mapContainer} />
      </div>
    </Container>
  );
};

export default Map;
