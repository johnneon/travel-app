export interface IUserState {
  user: IUserData;
  loggedIn: boolean;
  loading: boolean;
  error: null | string;
}
interface IFetchUserAction {
  type: UserActionTypes.FETCH_USER;
}

interface IFetchUserSuccesAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: IUserData;
}

interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERORR;
  payload: string;
}

interface ILogOutUser {
  type: UserActionTypes.LOGOUT_USER;
  payload: IUserData;
}

export interface IUserData {
  id: string; 
  email: string; 
  fullName: string;
  token: string; 
}

export interface IFetchUserData {
  email: string; 
  password: string;
  fullName?: string;
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERORR = 'FETCH_USER_ERORR',
  LOGOUT_USER = 'LOGOUT_USER'
}

export const initialUserState = {
  id: '',
  email: '',
  fullName:'',
  token: '',
};

export type IUserAction = IFetchUserAction | IFetchUserSuccesAction | IFetchUserErrorAction | ILogOutUser;
