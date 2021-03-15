import { ru, en, ua } from '../data/dictionary';

export const dictionary = { ru, en, ua };

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