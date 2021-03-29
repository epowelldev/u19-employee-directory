/* eslint-disable import/no-anonymous-default-export */
import {
  FILTER_USERS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch(action.type) {
    // case :
    //   return{};
    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter(user => {
          const regex = new RegExp(`${action.payload}`, "gi")
          return (
            user.name.title.match(regex) ||
            user.name.first.match(regex) ||
            user.name.last.match(regex) ||
            user.location.city.match(regex) ||
            user.location.state.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
}