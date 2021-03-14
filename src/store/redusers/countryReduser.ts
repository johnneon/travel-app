import { CountryActionTypes, ICountryAction, ICountryState } from "../../types/country";

const inititalState: ICountryState = {
  country: {
    id: '',
    capital: '',
    description: '',
    name: '',
    capitalLocation: {
      coordinates: [0, 0],
      type: ''
    },
    imageUrl: '',
    videoUrl: '',
    currency: '',
    ISOCode: '',
    timezone: 0,
    places: [],
  },
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
      return { ...state, loading: false, error: action.payload }
  
    default:
     return state;
  }
};
