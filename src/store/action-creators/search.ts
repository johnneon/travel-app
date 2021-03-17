import { Dispatch } from 'react';
import {
  SearchActionTypes,
  IChangeSearchAction,
} from '../../types/search';

export const changeSearch = (searchText: string) => {
  return (dispatch: Dispatch<IChangeSearchAction>) => {
    dispatch({
      type: SearchActionTypes.CHANGE_SEARCH,
      payload: { searchText },
    });
  };
};