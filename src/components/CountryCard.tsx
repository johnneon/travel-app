import React from 'react';
import {
  Typography,
  Link as StyledLink,
  makeStyles,
  Theme,
  Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface ICountryCardProps {
  id: string;
  name: string;
  capital: string;
  imageUrl: string;
}

interface IStyleProps {
  imageUrl: string;
}

const useStyles = ({ imageUrl }: IStyleProps) => (makeStyles((theme: Theme) => ({
  wrap: {
    perspective: 1000,
    transformStyle: 'preserve-3d',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 300,
    height: 400,
    padding: theme.spacing(2),
    marginRight: theme.spacing(4),
    background: `url(${imageUrl}) center no-repeat`,
    backgroundSize: 'cover',
    borderRadius: '10px',
    transition: 'transform .2s linear',
    boxShadow: 'inset 0 -120px 30px -3px rgb(0, 0, 0, .5), 0 10px 20px 1px rgb(0, 0, 0, .5)',
    '&:hover': {
      textDecoration: 'none',
      transform: 'scale(1.05)'
    },
    '@media(max-width: 514px)': {
      width: 230,
      height: 330,
      margin: theme.spacing(1.5),
      boxShadow: 'inset 0 -100px 25px -3px rgb(0, 0, 0, .5), 0 5px 15px 1px rgb(0, 0, 0, .5)',
    },
  }
})))();

export function CountryCard (props: ICountryCardProps) {
  const classes = useStyles(props);
  const { id, name, capital } = props;
  // Тут набросок анимации, но трабл в том что обновляется весь компонент
  // Стоит пропробовать через styled-comonents фишкой с div.attr(()=>)
  // const [rotateX, setRotateX] = useState<number>(0);
  // const [rotateY, setRotateY] = useState<number>(0);

  // const mouseMoveHandler = (event: React.MouseEvent) => {
  //   setRotateX(-(event.nativeEvent.offsetY - 150) / 7);
  //   setRotateY((event.nativeEvent.offsetY - 400) / 7);
  // }

  // const mouseOutHandler = (event: React.MouseEvent) => {
  //   setRotateX(0);
  //   setRotateY(0);
  // }
  // <div style={{transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}}> </div>

  return (
    <Box className={classes.wrap}>
      <StyledLink
        className={classes.card}
        component={Link}
        color="textPrimary"
        to={`/country/${id}`}
      >
        <Typography variant="h3" >{name}</Typography>
        <Typography variant="h4" >{capital}</Typography>
      </StyledLink>
    </Box>
  );
}
