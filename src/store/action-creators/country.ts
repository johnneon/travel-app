import axios from "axios";
import { Dispatch } from "react";
import { ICountryAction, CountryActionTypes } from "../../types/country";

export const fetchCountry = (id: string, lang: string) => {
  return async (dispatch: Dispatch<ICountryAction>) => {
    try {
      dispatch({ type: CountryActionTypes.FETCH_COUNTRY,  });
      const response = await axios.get(`https://travel-app-rss.herokuapp.com/countries/${id}/?lang=${lang}`);
      dispatch({ type: CountryActionTypes.FETCH_COUNTRY_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: CountryActionTypes.FETCH_COUNTRY_ERORR, payload: 'Got an error' });
    }
  };
};