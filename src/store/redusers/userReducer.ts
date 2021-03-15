import { UserActionTypes, IUserAction, IUserState } from "../../types/user";

const inititalState: IUserState = {
  user: {
    id: '',
    email: '',
    fullName:'',
    token: '',
  },
  loading: false,
  error: null,
}

export const userReduser = (state = inititalState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { ...state, loading: true }

    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }

    case UserActionTypes.FETCH_USER_ERORR:
      return { ...state, loading: false, error: action.payload }
  
    default:
     return state;
  }
};
