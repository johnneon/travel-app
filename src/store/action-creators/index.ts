import * as CountriesActionCreators from './countries';
import * as CountryActionCreators from './country';
import * as LanguageActionCreators from './language';

export const ActionCreators = {
  ...CountriesActionCreators,
  ...CountryActionCreators,
  ...LanguageActionCreators,
}