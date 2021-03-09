import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, Link, Icon } from '@material-ui/core';
import RssLogo from '../../assets/logo/rs_school_js.svg';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.text.disabled,
    },
    footerInner: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px 0',
      color: theme.palette.background.paper,
    },
    footerLink: {
      display: 'block',

      fontSize: '18px',
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary.light,
      },
    },
    footerItem: {
      display: 'inline-block',
      fontSize: '18px',
    },
    imageIcon: {
      width: 100,
    },
  }),
);

  function Footer() {
      const classes = useStyles();
      return (
        <AppBar position="static" className={classes.footer}>
          <Toolbar className={classes.footerInner}>
            <div className={classes.footerItem}>
              <Link
                href="https://github.com/johnneon"
                variant="h6"
                className={classes.footerLink}
                color="inherit">
                johnneon
              </Link>
              <Link
                href="https://github.com/svetlana-tyshkevich"
                variant="h6"
                className={classes.footerLink}
                color="inherit">
                svetlana-tyshkevich
              </Link>
            </div>
            <Link href="https://rs.school/js/" className={classes.footerItem}>
              <Icon >
                <img src={RssLogo} alt="rss" className={classes.imageIcon} />
              </Icon>
            </Link>
            <Typography className={classes.footerItem}>2021</Typography>
          </Toolbar>
        </AppBar>
      );
  }

  export default Footer;