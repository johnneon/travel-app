import { LanguageActionTypes, ICangeLanguageAction, ILanguageState, dictionary } from "../../types/dictionary";
import { variables } from '../../data/variables';

const inititalState: ILanguageState = {
  lang: variables.EN,
  dictionary: { ...dictionary.en },
};

export const languageReduser = (state = inititalState, action: ICangeLanguageAction): ILanguageState => {
  switch (action.type) {
    case LanguageActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        dictionary: action.payload.dictionary,
        lang: action.payload.lang,
      };

    default:
     return state;
  }
};
