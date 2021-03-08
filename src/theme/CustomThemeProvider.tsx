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
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
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
      paper: '#fafafa',
      default: '#eceff1',
    },
    text: {
      primary: '#fafafa',
      secondary: '#000000',
      disabled: '#bdbdbd',
      hint: '#fff',
    },
  }
});

export const CustomThemeProvider: React.FunctionComponent = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}