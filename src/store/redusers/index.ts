import { combineReducers } from "redux";
import { countryReduser } from './countryReduser';
import { countriesReduser } from "./countriesReduser";


export const rootReducer = combineReducers({
  countries: countriesReduser,
  country: countryReduser
});

export type IRootState = ReturnType<typeof rootReducer>;