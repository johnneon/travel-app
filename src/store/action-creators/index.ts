import * as CountriesActionCreators from './countries';
import * as CountryActionCreators from './country';
import * as LanguageActionCreators from './language';
import * as UserActionCreators from './user';
import * as SearchActionCreators from './search';

export const ActionCreators = {
  ...CountriesActionCreators,
  ...CountryActionCreators,
  ...LanguageActionCreators,
  ...UserActionCreators,
  ...SearchActionCreators,
};
