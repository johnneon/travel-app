import { combineReducers } from "redux";
import { countriesReduser } from "./countriesReduser";


export const rootReducer = combineReducers({
  countries: countriesReduser,
});