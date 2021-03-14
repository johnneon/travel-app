import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles, IconButton } from '@material-ui/core';
import Currency from './widgets/Currency';
import Time from './widgets/Time';
import Weather from './widgets/Weather';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  togglerOff: {
    contain: 'layout',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 2,
    transform: 'translate(0%, calc(100% - 48px))',
    transition: 'all .3s linear',
    textAlign: 'center',
    '&.toggleOn': {
      transform: 'translate(0, 0)',
      transition: 'all .3s linear',
    },
  },
  wrap: {
    backgroundColor: 'rgba(0,0,0,.4)',
    backgroundFilter: 'blur(23px)',
    paddingTop: 15,
    paddingBottom: 15,
  },
  btn: {
    background: 'rgba(0,0,0,.2)',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    margin: '0 auto',
  }
});

const WidgetPanel: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles(open);
  console.log(open);
  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  }

  return (
    <Box className={`${classes.togglerOff} ${open ? 'toggleOn' : ''}`}>
      <IconButton
        className={classes.btn}
        color="secondary"
        aria-label="Up"
        onClick={handleClick}
      >
        {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
      <Box className={classes.wrap}>
        <Container>
          <Grid container alignItems="stretch" justify="space-around" spacing={4}>
            <Time />
            <Weather />
            <Currency />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default WidgetPanel;
