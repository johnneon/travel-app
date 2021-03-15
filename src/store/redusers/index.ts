import { combineReducers } from "redux";
import { countryReduser } from './countryReduser';
import { countriesReduser } from "./countriesReduser";
import { languageReduser } from "./languageReduser";
import { userReduser } from "./userReducer";


export const rootReducer = combineReducers({
  countries: countriesReduser,
  country: countryReduser,
  language: languageReduser,
  user: userReduser,
});

export type IRootState = ReturnType<typeof rootReducer>;