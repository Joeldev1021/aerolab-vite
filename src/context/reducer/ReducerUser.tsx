import { UserAction } from "../actions/UserAction";
import { UserState } from "../../types/index";

export function ReducerUser (state:UserState, action: UserAction) {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        loading: true
      };
    case "LOAD_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case "LOAD_ADD_POINTS" :
      return {
        ...state,
        loading: true
      };
    case "LOAD_ADD_POINTS_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user, points: state.user.points + action.payload
        },
        loading: false
      };
    case "LOAD_ADD_REDEEM_HISTORY_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          points: state.user.points - action.payload.product.cost,
          redeemHistory: [...state.user.redeemHistory, action.payload.product]
        },
        loading: false
      };
    default:
      return state;
  }
};
