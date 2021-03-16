import { initialUserState, IUserData } from './../types/user';
import { variables } from "../data/variables";
import { IFetchUserData } from "../types/user";

export const isExpired = (jwtToken: string) => {
  if (!jwtToken) {
    return null;
  }

  const exp = JSON.parse(atob(jwtToken.split('.')[1]));

  if (!exp) {
    return null;
  }

  const deadline = exp.exp * 1000;

  return Date.now() > deadline;
};

export const saveUserData = (data: IFetchUserData) => {
  localStorage.setItem(variables.USER_DATA, JSON.stringify({...data}));
};

export const getUserData = (): IUserData => {
  const storage = window.localStorage.getItem(variables.USER_DATA);

  let data: IUserData = {...initialUserState};

  if (!storage) {
    return initialUserState;
  }

  data = JSON.parse(storage);

  if (isExpired(data.token)) {
    window.localStorage.removeItem(variables.USER_DATA);
    return initialUserState;
  }

  return data;
};

export const logoutUser = () => {
  window.localStorage.removeItem(variables.USER_DATA);
};

export const isLoggedIn = (): boolean => {
  const data = window.localStorage.getItem(variables.USER_DATA);

  if (!data) {
    return false;
  }

  if (JSON.parse(data)?.token !== '') {
    return false;
  }

  return true;
};