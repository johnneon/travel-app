import { Dispatch } from "react";
import { dictionary as importedDictionary, LanguageActionTypes, ICangeLanguageAction } from "../../types/dictionary";
import { variables } from '../../data/variables';

const { EN, RU, UA } = variables;

export const changeLanguage = (lang: string) => {
  return (dispatch: Dispatch<ICangeLanguageAction>) => {
    let dictionary;

    switch (lang) {
      case EN:
        dictionary = importedDictionary.en;
        break;
      case RU:
        dictionary = importedDictionary.ru;
        break;
      case UA:
        dictionary = importedDictionary.ua;
        break;
      default:
        dictionary = importedDictionary.en;
        break;
    }

    dispatch({ type: LanguageActionTypes.CHANGE_LANGUAGE, payload: { dictionary, lang } })
  };
};