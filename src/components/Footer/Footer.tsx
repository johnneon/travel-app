import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Typography,
  AppBar,
  Toolbar,
  Link,
  Icon,
  Container,
} from '@material-ui/core';
import RssLogo from '../../assets/logo/rs_school_js.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      flexGrow: 1,
      width: '100%',
    },
    footerInner: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 0',
      color: theme.palette.background.paper,
    },
    footerLink: {
      display: 'block',

      fontSize: '18px',
      '@media(max-width: 600px)': {
        fontSize: '14px',
      },
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary.light,
      },
    },
    footerItem: {
      display: 'inline-block',
      fontSize: '18px',
      width: 165,
      textAlign: 'center',
      '&:first-child': { textAlign: 'left' },
      '&:last-child': { textAlign: 'right' },
      '@media(max-width: 600px)': {
        fontSize: '14px',
      },
    },
    imageIcon: {
      width: 100,
      '@media(max-width: 600px)': {
        width: 75,
      },
    },
  }),
);

function Footer() {
  const classes = useStyles();
  return (
    <AppBar component="footer" position="static" className={classes.footer}>
      <Container>
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
            <Icon>
              <img src={RssLogo} alt="rss" className={classes.imageIcon} />
            </Icon>
          </Link>
          <Typography className={classes.footerItem}>© 2021</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
