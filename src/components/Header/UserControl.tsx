import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/typedSelector.hook';
import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Collapse,
  Typography,
  Theme,
  Button,
} from '@material-ui/core';
import { useAction } from '../../hooks/action.hook';

const useStyles = makeStyles((theme: Theme) => ({
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    paddingLeft: 15,
    '@media(max-width: 514px)': {
      paddingLeft: 0,
    }
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    position: 'absolute',
    right: '0',
    top: '100%',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    textAlign: 'right',
  },
  title: {
    paddingBottom: 10,
  }
}));

const UserControl: React.FunctionComponent = () => {
  const store = useTypedSelector((store) => store);
  const { avatar, fullName } = store.user.user;
  const { LOGOUT, LOGGED_AS } = store.language.dictionary;
  const { logoutUser } = useAction();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOutClick = () => {
    logoutUser();
  };

  const avatarIcon = () => {
    if (!avatar || avatar === '' || avatar?.length < 1) {
      return (
        <Avatar>
          {fullName.split(' ').map((word) => word[0].toUpperCase()).join('')}
        </Avatar>
      )
    }
    return <Avatar src={avatar} alt={fullName} />
  };

  return (
    <Box>
      <IconButton className={classes.avatarContainer} onClick={handleAvatarClick}>
        {avatarIcon()}
      </IconButton>
      <Collapse in={isOpen}>
        <div className={classes.container}>
          <Typography
            variant="body1"
            className={classes.title}
          >
            {LOGGED_AS} <b>{fullName}</b>
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            onClick={handleLogOutClick}
          >{LOGOUT}</Button>
        </div>
      </Collapse>
    </Box>
  );
};

export default UserControl;
