export interface ICountriesState {
  countries: any[];
  loading: boolean;
  error: null | string;
}

export enum CountriesActionTypes {
  FETCH_COUNTRIES = 'FETCH_COUNTRIES',
  FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
  FETCH_COUNTRIES_ERORR = 'FETCH_COUNTRIES_ERORR'
}

interface IFetchCountriesAction {
  type: CountriesActionTypes.FETCH_COUNTRIES;
}

interface IFetchCountriesSuccesAction {
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS;
  payload: any[];
}

interface IFetchCountriesErrorAction {
  type: CountriesActionTypes.FETCH_COUNTRIES_ERORR;
  payload: string;
}

export type ICountriesAction = IFetchCountriesAction | IFetchCountriesSuccesAction | IFetchCountriesErrorAction
