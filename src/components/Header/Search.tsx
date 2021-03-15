import React, { useState } from 'react';
import { useAction } from '../../hooks/action.hook';
import SearchIcon from '@material-ui/icons/Search';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import { IconButton, TextField, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

function Search() {
  const classes = useStyles();
  const { changeSearch } = useAction();
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    changeSearch(event.target.value as string);
    setSearchText(event.target.value as string);
  };

  return (
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
        value={searchText || ''}
        onChange={handleChange}
        className={classes.search}
        InputLabelProps={{ shrink: true }}
      />
    </StyledForm>
  );
}

export default Search;
