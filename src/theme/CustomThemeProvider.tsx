import React from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme, 
  ThemeProvider
} from '@material-ui/core/styles';

// Можно дописывать по схеме с https://material-ui.com/customization/default-theme/#default-theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#000000',
    },
    success: {
      main: '#76ff03',
      light: '#b0ff57',
      dark: '#32cb00',
      contrastText: '#000000',
    },
    background: {
      paper: '#fafafa',
      default: '#eceff1',
    },
    text: {
      primary: '#7986cb',
      secondary: '#3f51b5',
      disabled: '#303f9f',
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