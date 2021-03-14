import { Dispatch } from "react";
import { dictionary as importedDictionary, LanguageActionTypes, ICangeLanguageAction } from "../../types/dictionary";


export const changeLanguage = (lang: string) => {
  return (dispatch: Dispatch<ICangeLanguageAction>) => {
    let dictionary;

    switch (lang) {
      case 'en':
        dictionary = importedDictionary.en;
        break;
      case 'ru':
        dictionary = importedDictionary.ru;
        break;
      case 'uk':
        dictionary = importedDictionary.uk;
        break;
      default:
        dictionary = importedDictionary.en;
        break;
    }

    dispatch({ type: LanguageActionTypes.CHANGE_LANGUAGE, payload: { dictionary, lang } })
  };
};