import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
import CountryPage from './pages/CountryPage';
import { CustomThemeProvider } from './theme/CustomThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Provider store={store}>

            <Switch>
              <Route component={MainPage} path="/" exact />
              <Route component={CountryPage} path="/country/:id" />
            </Switch>

        </Provider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
