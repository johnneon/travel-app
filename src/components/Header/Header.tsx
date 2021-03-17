import React, { useState } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
  Container,
  Typography,
} from '@material-ui/core';

import LoginForm from '../LoginForm/LoginForm';
import Search from './Search';
import { useTypedSelector } from '../../hooks/typedSelector.hook';
import { useAction } from '../../hooks/action.hook';
import { variables } from '../../data/variables';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';

const { EN, RU, UK } = variables;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      backgroundFilter: 'blur(13px)',
      backgroundColor: 'rgba(0,0,0,.2)',
      boxShadow: 'none',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      '&:hover': { textDecoration: 'none' },
    },
    logo: {
      width: 50,
      '@media(max-width: 600px)': {
        width: 40,
      },
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    logoTitle: {
      fontSize: 30,
      fontWeight: 700,
      color: theme.palette.primary.contrastText,

      '@media(max-width: 720px)': {
        display: 'none',
      },
      '&:hover': {
        opacity: 0.7,
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 90,
      '@media(max-width: 600px)': {
        padding: '5px 0',
      },
      '@media(max-width: 514px)': {
        minHeight: 'auto',
      },
    },
    loginButton: {
      fontSize: '1rem',
      marginLeft: theme.spacing(4),
      '@media(max-width: 600px)': {
        fontSize: 14,
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const StyledForm = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff1744',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#ffffff50',
    },
    '& .MuiNativeSelect-icon': {
      borderBottomColor: '#ffffff50',
    },
  },
})(FormControl);

function Header() {
  const classes = useStyles();
  const { changeLanguage } = useAction();
  const { dictionary } = useTypedSelector((state) => state.laguage);
  const { TRAVEL_APP } = dictionary;
  const [language, setLanguage] = useState(EN);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    changeLanguage(event.target.value as string);
    setLanguage(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" className={classes.header}>
      <Container>
        <Toolbar className={classes.headerRow}>
          <NavLink to="/" className={classes.logoLink}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography
              variant="h1"
              component="h2"
              className={classes.logoTitle}>
              {TRAVEL_APP}
            </Typography>
          </NavLink>
          <div className={classes.headerRow}>
            <Search />

            <StyledForm>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={language || 'EN'}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'lang' }}
              >
                <MenuItem value={EN}>EN</MenuItem>
                <MenuItem value={RU}>RU</MenuItem>
                <MenuItem value={UK}>UK</MenuItem>
              </Select>
            </StyledForm>

            <LoginForm />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
