import React, { useState} from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { useTypedSelector } from '../hooks/typedSelector.hook';
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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.contrastText,
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
  const { dictionary } = useTypedSelector((state) => state.laguage);
  const { COUNTRY_ATTRACTION } = dictionary;
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
      <Container>
        <Typography color="textPrimary" variant="h3">
          {COUNTRY_ATTRACTION}
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
