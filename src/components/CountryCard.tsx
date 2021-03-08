import React from 'react';
import {
  Typography,
  Link as StyledLink,
  makeStyles,
  Theme
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface ICountryCardProps {
  id: string;
  name: string;
  capital: string;
  imageUrl: string;
}

interface IStyleProps {
  imageUrl: string
}

const useStyles = ({ imageUrl }: IStyleProps) => (makeStyles((theme: Theme) => ({
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 300,
    height: 400,
    padding: theme.spacing(2),
    background: `url(${imageUrl}) center no-repeat`,
    backgroundSize: 'cover',
    borderRadius: '10px',
    '&:hover': {
      textDecoration: 'none',
    }
  }
})))();

export function CountryCard (props: ICountryCardProps) {
  const { id, name, capital } = props;
  const classes = useStyles(props);

  return (
    <StyledLink
      className={classes.wrap}
      component={Link}
      color="textPrimary"
      to={`/country/${id}`}
    >

      <Typography variant="h3" >{name}</Typography>
      <Typography variant="h4" >{capital}</Typography>

    </StyledLink>
  );
}
