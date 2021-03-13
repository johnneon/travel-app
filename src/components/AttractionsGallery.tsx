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

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


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

const AttractionsGallery: React.FunctionComponent = ({
//   id: string,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrap} container alignItems="flex-end">
      <Container>
        <ImageGallery items={images} />
      </Container>
    </Grid>
  );
};

export default AttractionsGallery;
