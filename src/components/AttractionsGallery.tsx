import React from 'react';
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
    height: '90vh',
    marginTop: 100,
    marginBottom: 200,
    padding: 20,
    color: theme.palette.primary.contrastText,
  },
  font: {
    fontFamily: "'Caveat', cursive",
    color: theme.palette.secondary.main,
  },
  gallery: {
    '& .image-gallery-icon:hover': { color: theme.palette.secondary.light },
    '& .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus': {
      borderColor: theme.palette.secondary.light,
    },
    '& .image-gallery-image': {
      width: '100%',
      height: 'calc(90vh - 80px)',
      objectFit: 'cover',
    },
  },
}));

const AttractionsGallery: React.FunctionComponent<IGalleryProps> = ({
  places,
}) => {
  const classes = useStyles();
  const images = places.map((item: IGalleryItemProps) => ({
    originalTitle: item.name,
    original: `${item.photoUrl}`,
    thumbnail: `${item.photoUrl}`,
    description: item.description,
  }));

  return (
    <Grid className={classes.wrap} container alignItems="flex-end">
      <Container>
        <ImageGallery items={images} additionalClass={classes.gallery} />
      </Container>
    </Grid>
  );
};

export default AttractionsGallery;
