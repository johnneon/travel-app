import {
  ISearchState,
  IChangeSearchAction,
  SearchActionTypes,
} from '../../types/search';

const inititalState: ISearchState = {
  searchText: '',
};

export const searchReduser = (
  state = inititalState,
  action: IChangeSearchAction,
): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.CHANGE_SEARCH:
      return {
        ...state,
        searchText: action.payload.searchText,
      };

    default:
      return state;
  }
};
