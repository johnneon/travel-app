import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
interface IGalleryProps {
  places: Array<IGalleryItemProps>;
}
interface IGalleryItemProps {
  description: string;
  name: string;
  photoUrl: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    height: '100vh',
    marginTop: 100,
    marginBottom: 200,
    color: theme.palette.primary.contrastText,
    boxShadow: `inset 0px -500px 370px -100px ${theme.palette.primary.main}`,
    '@media(max-width: 514px)': {
      height: 'auto',
    },
  },
  font: {
    fontFamily: "'Caveat', cursive",
    color: theme.palette.secondary.main,
  },
}));

const AttractionsGallery: React.FunctionComponent<IGalleryProps> = ({ places
}) => {
  const classes = useStyles();
  const images = places.map((item: IGalleryItemProps) => ({
    original: `${item.photoUrl}`,
    thumbnail: `${item.photoUrl}`,
  }));

  return (
    <Grid className={classes.wrap} container alignItems="flex-end">
      <Container>
        <ImageGallery items={images} />
      </Container>
    </Grid>
  );
};

export default AttractionsGallery;
