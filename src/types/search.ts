export interface ISearchState {
  searchText: string;
}

export enum SearchActionTypes {
  CHANGE_SEARCH = 'CHANGE_SEARCH',
}

export interface IChangeSearchAction {
  type: SearchActionTypes.CHANGE_SEARCH;
  payload: ISearchState;
}
