export interface ICountryState {
  country: ICountryData;
  loading: boolean;
  error: null | string;
}
interface IFetchCountryAction {
  type: CountryActionTypes.FETCH_COUNTRY;
}

interface IFetchCountrySuccesAction {
  type: CountryActionTypes.FETCH_COUNTRY_SUCCESS;
  payload: ICountryData;
}

interface IFetchCountryErrorAction {
  type: CountryActionTypes.FETCH_COUNTRY_ERORR;
  payload: string;
}

interface IPlace {
  description: string;
  name: string;
  photoUrl: string;
}
export interface ICountryData {
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
  places: IPlace[];
}

export enum CountryActionTypes {
  FETCH_COUNTRY = 'FETCH_COUNTRY',
  FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
  FETCH_COUNTRY_ERORR = 'FETCH_COUNTRY_ERORR'
}

export type ICountryAction = IFetchCountryAction | IFetchCountrySuccesAction | IFetchCountryErrorAction
