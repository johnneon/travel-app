import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
import CountryPage from './pages/CountryPage';
import { CustomThemeProvider } from './theme/CustomThemeProvider';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>

        <div className="container">
          <Switch>
            <Route component={MainPage} path="/" exact />
            <Route component={CountryPage} path="/country/:id" />
          </Switch>
        </div>

      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
