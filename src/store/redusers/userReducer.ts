import { getUserData, isLoggedIn } from './../../utils/storage';
import { UserActionTypes, IUserAction, IUserState } from "../../types/user";

const inititalState: IUserState = {
  user: getUserData(),
  loggedIn: isLoggedIn(),
  loading: false,
  error: '',
  successMessage: '',
}

export const userReduser = (state = inititalState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { ...state, loading: true };

    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, loggedIn: true };

    case UserActionTypes.FETCH_USER_ERORR:
      return { ...state, loading: false, error: action.payload, loggedIn: false };
      
    case UserActionTypes.LOGOUT_USER:
      return { ...state, user: action.payload, loggedIn: false };

    case UserActionTypes.SHOW_MESSAGE:
      return { ...state, successMessage: action.payload };

    case UserActionTypes.CLEAR_MESSAGE:
      return { ...state, error: '', successMessage: '' }
  
    default:
     return state;
  }
};
