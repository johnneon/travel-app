export interface ICountriesState {
  countries: ICountriesData[];
  loading: boolean;
  error: null | string;
}

interface IFetchCountriesAction {
  type: CountriesActionTypes.FETCH_COUNTRIES;
}

interface IFetchCountriesSuccesAction {
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS;
  payload: ICountriesData[];
}

interface IFetchCountriesErrorAction {
  type: CountriesActionTypes.FETCH_COUNTRIES_ERORR;
  payload: string;
}

export interface ICountriesData {
  id: string;
  imageUrl: string;
  videoUrl: string;
  currency: string;
  ISOCode: string;
  capitalLocation: {
    type: string,
    coordinates: number[],
  };
  name: string;
  capital: string;
  description: string;
}

export enum CountriesActionTypes {
  FETCH_COUNTRIES = 'FETCH_COUNTRIES',
  FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
  FETCH_COUNTRIES_ERORR = 'FETCH_COUNTRIES_ERORR'
}

export type ICountriesAction = IFetchCountriesAction | IFetchCountriesSuccesAction | IFetchCountriesErrorAction
