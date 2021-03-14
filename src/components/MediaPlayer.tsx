import { Box, Container, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import YouTube from 'react-youtube';

export interface IMediaPlayerProps {
  videoId: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  videoContainer: {
    marginTop: 20,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '30px',
    height: 0,
    '& iframe': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
    },
  },
}));

export function MediaPlayer ({ videoId }: IMediaPlayerProps) {
  const classes = useStyles();

  const opts = {
    width: '100%',
    height: 'auto',
  };

  return (
    <Box className={classes.wrap}>
      <Container>
        <Typography color="textPrimary" variant="h3">Country overview</Typography>
        <Box className={classes.videoContainer}>
          <YouTube videoId={videoId} opts={opts} />
        </Box>
      </Container>
    </Box>
  );
};
