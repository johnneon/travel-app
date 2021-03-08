import { CountriesActionTypes, ICountriesAction, ICountriesState } from "../../types/countries";

const inititalState: ICountriesState = {
  countries: [],
  loading: false,
  error: null,
}

export const countriesReduser = (state = inititalState, action: ICountriesAction): ICountriesState => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_COUNTRIES:
      return { loading: true, error: null, countries: [] }

    case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
      return { loading: false, error: null, countries: action.payload }

    case CountriesActionTypes.FETCH_COUNTRIES_ERORR:
      return { loading: false, error: action.payload, countries: [] }
  
    default:
     return state;
  }
};
