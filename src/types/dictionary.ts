const en = {
  DOSCOVER: 'Discover the',
  PLANET: 'planet',
  WITH: 'with',
  TRAVEL_APP: 'Travel-app',
  BACK: 'Back',
  COUNTRY_OVERVIEW: 'Country overview',
  ON_THE_MAP: 'On the map',
  COUNTRY: 'Country',
  CAPITAL: 'Capital',
  SEARCH: 'Search',
  CURRENT_CURRENCY: 'Currency in',
  IS: 'is',
  COSTS: 'costs',
  TODAY_IN: 'Today in',
  TODAY: "Today",
  FEELS: "Feels like",
  WIND_SPEEN: "Wind speed is",
  WIND_SPEED_UNIT: "m/s",
  AIR_HUMINDITY: "Air humidity",
};

const ru = {
  DOSCOVER: 'Откройте для себя',
  PLANET: 'планету',
  WITH: 'вместе с',
  TRAVEL_APP: 'Travel-app',
  BACK: 'Назад',
  COUNTRY_OVERVIEW: 'Обзор достопримечательностей',
  ON_THE_MAP: 'На карте',
  COUNTRY: 'Страна',
  CAPITAL: 'Столица',
  SEARCH: 'Поиск',
  CURRENT_CURRENCY: 'Валюта в',
  IS: '',
  COSTS: 'стоит',
  TODAY_IN: 'Сегодня в',
  TODAY: "Сегодня",
  FEELS: "Чувствуется как",
  WIND_SPEEN: "Скорость ветра",
  WIND_SPEED_UNIT: "м/с",
  AIR_HUMINDITY: "Влажность воздуха",
};

const uk = {
  DOSCOVER: 'Відкрийте для себе',
  PLANET: 'планету',
  WITH: 'разом з',
  TRAVEL_APP: 'Travel-app',
  BACK: 'Назад',
  COUNTRY_OVERVIEW: "Огляд визначних пам'яток",
  ON_THE_MAP: 'На карті',
  COUNTRY: 'Країна',
  CAPITAL: 'Столиця',
  SEARCH: 'Пошук',
  CURRENT_CURRENCY: 'Валюта в',
  IS: '',
  COSTS: 'коштує',
  TODAY_IN: 'Сьогодні в',
  TODAY: "Сьогодні",
  FEELS: "Відчувається як",
  WIND_SPEEN: "Швидкість вітру",
  WIND_SPEED_UNIT: "м/с",
  AIR_HUMINDITY: "Вологість повітря",
};

export const dictionary = { ru, en, uk };

export interface ILanguageState {
  lang: string;
  dictionary: typeof en;
};

export enum LanguageActionTypes {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
}

export interface ICangeLanguageAction {
  type: LanguageActionTypes.CHANGE_LANGUAGE;
  payload: ILanguageState;
}