import React from 'react';
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
  NativeSelect,
  Link,
  Container,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LoginForm from '../LoginForm/LoginForm';

import logo from '../../assets/logo/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: 50,
      '@media(max-width: 600px)': {
        width: 40,
      },
    },
    logoTitle: {
      fontSize: 30,
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
      color: '#ffffff',
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
  return (
    <AppBar position="static">
      <Container>
        <Toolbar className={classes.headerRow}>
          <Link href="/" className={classes.logoLink}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography
              variant="h1"
              component="h2"
              color="secondary"
              className={classes.logoTitle}>
              TRAVEL
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
                placeholder="Search"
                autoFocus={true}
                autoComplete="off"
                type="search"
                className={classes.search}
                InputLabelProps={{ shrink: true }}
              />
            </StyledForm>

            <StyledForm>
              <NativeSelect
                // value={state.age}
                // onChange={handleChange}
                name="lang"
                inputProps={{ 'aria-label': 'lang' }}>
                <option value={'en'}>EN</option>
                <option value={'ru'}>RU</option>
                <option value={'third'}>Third</option>
              </NativeSelect>
            </StyledForm>

            <LoginForm />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
