import React, { useState, Fragment } from 'react';
import {
  Modal,
  Button,
  Backdrop,
  Fade,
  Grid,
  Theme,
  makeStyles,
  createStyles,
  CircularProgress
} from '@material-ui/core/';
import AuthFormTabs from './AuthTabs';
import AuthForm from './AuthForm';
import { useAction } from '../../hooks/action.hook';
import { IFetchUserData } from '../../types/user';

interface IAuthCardProps {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center',
      outline: 'none',
    },
    input: {
      display: 'block',
      padding: 5,
      margin: 15,
      width: 250,
    },
    logo: {
      width: 50,
    },
    loginButton: {
      marginLeft: theme.spacing(4),
      '@media(max-width: 600px)': {
        marginLeft: 0,
      },
    },
    loginSubmit: {
      backgroundColor: theme.palette.secondary.main,
    },
    auth__form: {
      padding: '0 20px 20px',
      maxWidth: '380px',
      backgroundColor: theme.palette.text.primary,
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
    },
    backdrop: {
      zIndex: theme.zIndex.snackbar + 1,
      color: '#fff',
    },
  }),
);

const AuthCard: React.FunctionComponent<IAuthCardProps> = (props) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const { registerUser, loginUser } = useAction();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeActiveTabHandler = (event: React.ChangeEvent<{}>, tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const sendRegistrationRequest = async (data: IFetchUserData) => {
    registerUser(data);
  };

  const sendLoginRequest = async (data: IFetchUserData) => {
    loginUser(data);
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
        }}
      >
        <Fade in={open}>
          <Grid
            container
            className={classes.auth__form}
            direction="column"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item>
              <AuthFormTabs
                activeTab={activeTab}
                changeActiveTabHandler={changeActiveTabHandler}
              />
            </Grid>
            <Grid item>
              <AuthForm
                activeTab={activeTab}
                action={activeTab ? sendLoginRequest : sendRegistrationRequest}
              />
            </Grid>
          </Grid>

        </Fade>
      </Modal>
      <Backdrop className={classes.backdrop} open={false}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Fragment>
  );
};

export default AuthCard;
