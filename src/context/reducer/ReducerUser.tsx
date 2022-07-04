import { UserAction } from "../actions/UserAction";
import { UserState } from "../../types/index";

export function ReducerUser (state:UserState, action: UserAction) {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
