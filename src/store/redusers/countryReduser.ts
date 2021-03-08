import { CountryActionTypes, ICountryAction, ICountryState } from "../../types/country";

const inititalState: ICountryState = {
  country: {},
  loading: false,
  error: null,
}

export const countryReduser = (state = inititalState, action: ICountryAction): ICountryState => {
  switch (action.type) {
    case CountryActionTypes.FETCH_COUNTRY:
      return { ...state, loading: true }

    case CountryActionTypes.FETCH_COUNTRY_SUCCESS:
      return { ...state, loading: false, country: action.payload }

    case CountryActionTypes.FETCH_COUNTRY_ERORR:
      return { loading: false, error: action.payload, country: {} }
  
    default:
     return state;
  }
};
