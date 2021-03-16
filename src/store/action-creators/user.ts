import { saveUserData, logoutUser as removeUserFromStorage } from './../../utils/storage';
import axios from "axios";
import { Dispatch } from "react";
import { IUserAction, UserActionTypes, IFetchUserData, initialUserState } from "../../types/user";

export const registerUser = (data: IFetchUserData) => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER,  });
      const response = await axios.post(`https://travel-app-rss.herokuapp.com/auth/register`, {
        ...data,
      });
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: 'Got an error' });
    }
  };
};

export const loginUser = (data: IFetchUserData) => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER,  });
      const response = await axios.post(`https://travel-app-rss.herokuapp.com/auth/login`, {
        ...data,
        'Content-Type': 'application/json',
      });
      saveUserData(response.data);
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: 'Got an error' });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    removeUserFromStorage();
    dispatch({ type: UserActionTypes.LOGOUT_USER, payload: initialUserState });
  };
};