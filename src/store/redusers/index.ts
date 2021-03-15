import { combineReducers } from "redux";
import { countryReduser } from './countryReduser';
import { countriesReduser } from "./countriesReduser";
import { languageReduser } from "./languageReduser";


export const rootReducer = combineReducers({
  countries: countriesReduser,
  country: countryReduser,
  laguage: languageReduser,
});

export type IRootState = ReturnType<typeof rootReducer>;