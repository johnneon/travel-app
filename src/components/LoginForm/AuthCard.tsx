/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Fragment, useEffect, useCallback } from 'react';
import {
  Modal,
  Button,
  Backdrop,
  Fade,
  Grid,
  Theme,
  makeStyles,
  createStyles,
  CircularProgress,
} from '@material-ui/core/';
import AuthFormTabs from './AuthTabs';
import AuthForm from './AuthForm';
import { useAction } from '../../hooks/action.hook';
import { useTypedSelector } from '../../hooks/typedSelector.hook';
import { useSnackbar } from 'notistack';
import logo from '../../assets/logo/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.contrastText,
    },
    logo: {
      display: 'block',
      width: 50,
      margin: '0 auto',
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
      backgroundColor: theme.palette.primary.main,
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
      outline: 'none',
    },
    backdrop: {
      zIndex: 40,
      color: '#fff',
    },
  }),
);

const AuthCard: React.FunctionComponent = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState<boolean>(false);
  const { registerUser, loginUser, clearMessage,  } = useAction();
  const store = useTypedSelector((store) => store);
  const { loading, error, successMessage } = store.user;
  const { ACCOUNT } = store.language.dictionary;
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = useCallback((message: string, variant: 'success' | 'error') => {
    return enqueueSnackbar(message, { variant })
  }, [enqueueSnackbar]);

  useEffect(() => {
    if (error !== '') {
      showSnackbar(error, 'error');
    }
    if (successMessage !== '') {
      setOpen(!open);
      showSnackbar(successMessage, 'success');
    }
    clearMessage();
  }, [error, successMessage]);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeActiveTabHandler = (event: React.ChangeEvent<{}>, tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const sendRegistrationRequest = async (data: FormData) => {
    registerUser(data);
  };

  const sendLoginRequest = async (data: FormData) => {
    loginUser(data);
  };

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleOpen}
        className={classes.loginButton}
      >
        {ACCOUNT}
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
              <img src={logo} alt="Logo" className={classes.logo} />
              <Grid item>
                <AuthForm
                  activeTab={activeTab}
                  action={activeTab ? sendLoginRequest : sendRegistrationRequest}
                />
                <Backdrop className={classes.backdrop} open={loading}>
                  <CircularProgress color="secondary" />
                </Backdrop>
              </Grid>
            </Grid>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default AuthCard;
