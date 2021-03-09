import React from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme, 
  ThemeProvider
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff1744',
      light: '#ff616f',
      dark: '#c4001d',
      contrastText: '#000000',
    },
    error: {
      main: '#ff3d00',
      light: '#ff7539',
      dark: '#c30000',
      contrastText: '#000000',
    },
    success: {
      main: '#64dd17',
      light: '#9cff57',
      dark: '#1faa00',
      contrastText: '#000000',
    },
    background: {
      paper: '#686464',
      default: '#eceff1',
    },
    text: {
      primary: '#fafafa',
      secondary: '#000000',
      disabled: '#bdbdbd',
      hint: '#fff',
    },
  },
});

export const CustomThemeProvider: React.FunctionComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}