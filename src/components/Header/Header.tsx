import React, { useState } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import {
  IconButton,
  AppBar,
  Toolbar,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Link,
  Container,
  Typography,
} from '@material-ui/core';
import { useTypedSelector } from '../../hooks/typedSelector.hook';
import SearchIcon from '@material-ui/icons/Search';
import LoginForm from '../LoginForm/LoginForm';
import { useAction } from '../../hooks/action.hook';

import logo from '../../assets/logo/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      '&:hover': {textDecoration: 'none',},
    },
    logo: {
      width: 50,
      '@media(max-width: 600px)': {
        width: 40,
      },
    },
    logoTitle: {
      fontSize: 30,
      fontWeight: 700,
      color: theme.palette.primary.contrastText,
      
      '@media(max-width: 720px)': {
        display: 'none',
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
    },
    search: {
      marginRight: theme.spacing(4),
      '@media(max-width: 600px)': {
        fontSize: 14,
        marginRight: theme.spacing(2),
        minWidth: '20px',
      },
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: 90,
      '@media(max-width: 600px)': {
        padding: 0,
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
    iconButton: {
      color: theme.palette.primary.contrastText,
      padding: '0 5px',
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
  const { TRAVEL_APP, SEARCH } = dictionary;
  const [language, setLanguage] = useState('en');
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
    <AppBar position="absolute" className={classes.header}>
      <Container>
        <Toolbar className={classes.headerRow}>
          <Link href="/" className={classes.logoLink}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography
              variant="h1"
              component="h2"
              className={classes.logoTitle}>
              {TRAVEL_APP}
            </Typography>
          </Link>
          <div className={classes.headerRow}>
            <StyledForm className={classes.form}>
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search">
                <SearchIcon />
              </IconButton>
              <TextField
                id="search"
                name="search"
                placeholder={SEARCH}
                autoFocus={true}
                autoComplete="off"
                type="search"
                className={classes.search}
                InputLabelProps={{ shrink: true }}
              />
            </StyledForm>

            <StyledForm>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={language}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'lang' }}
              >
                <MenuItem value={'en'}>EN</MenuItem>
                <MenuItem value={'ru'}>RU</MenuItem>
                <MenuItem value={'uk'}>UK</MenuItem>
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
