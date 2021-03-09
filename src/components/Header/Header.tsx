import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  AppBar,
  Toolbar,
  InputAdornment,
  TextField,
  FormControl,
  NativeSelect,
  Link,
  Container,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
    },
    logoTitle: {
        fontSize:30,
    },
    form: {
      color: '#000',
      marginRight: theme.spacing(4),
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    loginButton: {
      fontSize: '1rem',
      marginLeft: theme.spacing(4),
    },
    iconButton: {
      color: '#ffffff',
    },
    h1: {
        fontSize: 20,
    }
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
          <div>
            <StyledForm>
              <TextField
                id="search"
                name="search"
                placeholder="Search"
                autoFocus={true}
                autoComplete="off"
                type="search"
                className={classes.form}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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

            <Button color="inherit" className={classes.loginButton}>
              Login
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
