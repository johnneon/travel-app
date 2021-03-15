export interface IUserState {
  user: IUserData;
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
  FETCH_USER_ERORR = 'FETCH_USER_ERORR'
}

export type IUserAction = IFetchUserAction | IFetchUserSuccesAction | IFetchUserErrorAction
