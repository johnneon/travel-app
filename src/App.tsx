import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CountryPage from './pages/CountryPage';
import { CustomThemeProvider } from './theme/CustomThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store';
import { SnackbarProvider } from 'notistack';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Provider store={store}>
          <SnackbarProvider
            maxSnack={3}
            autoHideDuration={2000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Header />
            <Switch>
              <Route path="/" exact>
                <MainPage />
              </Route>

              <Route path="/country/:id" exact>
                <CountryPage />
              </Route>

              <Redirect to="/" />
            </Switch>
            <Footer />
          </SnackbarProvider>
        </Provider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
