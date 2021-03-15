import { combineReducers } from "redux";
import { countryReduser } from './countryReduser';
import { countriesReduser } from "./countriesReduser";
import { languageReduser } from "./languageReduser";
import { searchReduser } from './searchReducer';


export const rootReducer = combineReducers({
  countries: countriesReduser,
  country: countryReduser,
  laguage: languageReduser,
  search: searchReduser,
});

export type IRootState = ReturnType<typeof rootReducer>;