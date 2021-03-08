export interface ICountryState {
  country: any;
  loading: boolean;
  error: null | string;
}

export enum CountryActionTypes {
  FETCH_COUNTRY = 'FETCH_COUNTRY',
  FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
  FETCH_COUNTRY_ERORR = 'FETCH_COUNTRY_ERORR'
}

interface IFetchCountryAction {
  type: CountryActionTypes.FETCH_COUNTRY;
}

interface IFetchCountrySuccesAction {
  type: CountryActionTypes.FETCH_COUNTRY_SUCCESS;
  payload: any;
}

interface IFetchCountryErrorAction {
  type: CountryActionTypes.FETCH_COUNTRY_ERORR;
  payload: string;
}

export type ICountryAction = IFetchCountryAction | IFetchCountrySuccesAction | IFetchCountryErrorAction
