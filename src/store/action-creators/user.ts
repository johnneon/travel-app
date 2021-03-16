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
      saveUserData(response.data);
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data });
      dispatch({ type: UserActionTypes.SHOW_MESSAGE, payload: 'User created successfully!' });
    } catch (error) {
      dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: error });
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
      dispatch({ type: UserActionTypes.SHOW_MESSAGE, payload: 'User logged in successfully!' });
      saveUserData(response.data);
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      if (error?.response?.data?.errors?.detail) {
        dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: error?.response?.data?.errors?.detail });
      } else {
        dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: 'Got an error' });
      }
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    removeUserFromStorage();
    dispatch({ type: UserActionTypes.LOGOUT_USER, payload: initialUserState });
  };
};

export const clearMessage = () => {
  return async (dispatch: Dispatch<IUserAction>) => {
    dispatch({ type: UserActionTypes.CLEAR_MESSAGE });
  };
};