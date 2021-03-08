import * as CountriesActionCreators from './countries';
import * as CountryActionCreators from './country';

export const ActionCreators = {
  ...CountriesActionCreators,
  ...CountryActionCreators
}