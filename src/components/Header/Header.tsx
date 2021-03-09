import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  AppBar,
  Toolbar,
  InputAdornment,
  TextField,
  FormControl,
  NativeSelect,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/logo/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      width: 50,
    },
    form: {
      color: '#000',
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    loginButton: {
        fontSize: '1rem'
    }
  }),
);

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.headerRow}>
        <img src={logo} alt="logo" className={classes.logo} />
        <TextField
          id="search"
          name="search"
          placeholder="Search"
          autoFocus={true}
          type="search"
          className={classes.form}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl>
          <NativeSelect
            // value={state.age}
            // onChange={handleChange}
            name="lang"
            inputProps={{ 'aria-label': 'lang' }}>
            <option value={'en'}>EN</option>
            <option value={'ru'}>RU</option>
            <option value={'third'}>Third</option>
          </NativeSelect>
        </FormControl>

        <Button color="inherit" className={classes.loginButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
