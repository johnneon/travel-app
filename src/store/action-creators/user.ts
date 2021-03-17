import { saveUserData, logoutUser as removeUserFromStorage } from './../../utils/storage';
import axios from "axios";
import { Dispatch } from "react";
import { IUserAction, UserActionTypes, IFetchUserData, initialUserState } from "../../types/user";

export const registerUser = (data: FormData) => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      // @ts-ignore
      for (var value of data.values()) {
        console.log(value);
      }
      // @ts-ignore
      for (var key of data.keys()) {
        console.log(key);
      }
      dispatch({ type: UserActionTypes.FETCH_USER, });
      const response = await axios.post('https://travel-app-rss.herokuapp.com/auth/login', data); // for local back http://localhost:8888
      saveUserData(response.data);
      dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data });
      dispatch({ type: UserActionTypes.SHOW_MESSAGE, payload: 'User created successfully!' });
    } catch (error) {
      if (error?.response?.data?.errors?.detail) {
        dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: error?.response?.data?.errors?.detail });
      } else {
        dispatch({ type: UserActionTypes.FETCH_USER_ERORR, payload: 'Got an error' });
      }
    }
  };
};

export const loginUser = (data: FormData) => {
  return async (dispatch: Dispatch<IUserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER,  });
      const response = await axios.post('https://travel-app-rss.herokuapp.com/auth/register', {
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