import React, { useState, useEffect } from 'react';
import {
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
    marginTop: 100,
    marginBottom: 200,
    color: theme.palette.primary.contrastText,
  },
  container: {
    maxWidth: '70vw',
  },
  font: {
    fontFamily: "'Caveat', cursive",
    color: theme.palette.secondary.main,
  },
  gallery: {
    marginTop: 20,
    '& .image-gallery-icon:hover': { color: theme.palette.secondary.light },
    '& .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus': {
      borderColor: theme.palette.secondary.light,
    },
    '& .image-gallery-slide, & .image-gallery-image': {
      height: 'calc(85vh - 80px)',
      objectFit: 'cover',
    },
    '& .image-gallery-description': {
      background: 'rgba(0, 0, 0, 0.7)',
    }
  },
}));

const AttractionsGallery: React.FunctionComponent<IGalleryProps> = ({
  places,
}) => {
  const classes = useStyles();
  const images = places.map((item: IGalleryItemProps) => ({
    name: item.name,
    original: item.photoUrl,
    thumbnail: item.photoUrl,
    description: item.description,
  }));

  const [currentSlideId, setCurrentSlideId] = useState<number>(0);
  const AttractionName = () => {
    return (
      <Typography component="span" className={classes.font} variant="h2">
        {places?.[currentSlideId]?.name}
      </Typography>
    );
  };

  const setIndex = (id: number) => {
    setCurrentSlideId(id);
  };

  return (
    <Grid className={classes.wrap} container>
      <Container className={classes.container}>
        <Typography align="center" color="textPrimary" variant="h2">
          Country attractions
        </Typography>
        <AttractionName />
        <ImageGallery
          items={images}
          thumbnailPosition="bottom"
          additionalClass={classes.gallery}
          onSlide={setIndex}
        />
      </Container>
    </Grid>
  );
};

export default AttractionsGallery;
