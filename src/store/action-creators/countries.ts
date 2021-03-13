import axios from "axios";
import { Dispatch } from "react";
import { ICountriesAction, CountriesActionTypes } from "../../types/countries";


export const fetchAllCountries = () => {
  return async (dispatch: Dispatch<ICountriesAction>) => {
    try {
      dispatch({ type: CountriesActionTypes.FETCH_COUNTRIES,  });
      const response = await axios.get('https://travel-app-rss.herokuapp.com/countries');
      dispatch({ type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: CountriesActionTypes.FETCH_COUNTRIES_ERORR, payload: 'Got an error' });
    }
  };
};