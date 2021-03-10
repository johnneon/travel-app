import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Modal,
  Button,
  Backdrop,
  Fade,
  Paper,
  Input,
} from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center',
    },
    input: {
      display: 'block',
      padding: 5,
      margin: 15,
      width: 250,
    },
    loginButton: {
      fontSize: '1rem',
      marginLeft: theme.spacing(4),
      '@media(max-width: 600px)': {
        fontSize: 14,

        marginLeft: 0,
      },
    },
    loginSubmit: {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

export default function LoginForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleOpen}
        className={classes.loginButton}
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Input
              className={classes.input}
              id="email"
              type="email"
              placeholder="Email"
            />
            <Input
              className={classes.input}
              id="password"
              type="password"
              placeholder="Password"
            />

            <Button variant="contained" className={classes.loginSubmit}>
              Sign in
            </Button>
          </Paper>
        </Fade>
      </Modal>
    </Fragment>
  );
}
