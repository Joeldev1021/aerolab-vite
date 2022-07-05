import { UserAction } from "../actions/UserAction";
import { UserState } from "../../types/index";

export function ReducerUser (state:UserState, action: UserAction) {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        user: action.payload
      };
    case "ADD_COINS":
      return {
        ...state,
        user: {
          ...state.user, points: state.user.points + action.payload
        }
      };
    case "DECREMENT_COINS":
      return {
        ...state,
        user: {
          ...state.user, points: state.user.points - action.payload.cost
        }

      };
    default:
      return state;
  }
};
