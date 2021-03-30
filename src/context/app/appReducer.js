/* eslint-disable import/no-anonymous-default-export */
import {
  FILTER_USERS,
  CLEAR_FILTER,
  NEW_USERS,
  SORT_USERS_BY_FIRST,
} from "../types";

export default (state, action) => {
  switch(action.type) {
    case NEW_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter(user => {
          const regex = new RegExp(`${action.payload}`, "gi")
          return (
            user.name.first.match(regex) ||
            user.name.last.match(regex) ||
            user.login.username.match(regex) ||
            user.location.city.match(regex) ||
            user.location.state.match(regex) ||
            user.location.country.match(regex) ||
            user.email.match(regex) ||
            user.phone.match(regex)
          );
        })
      };
    case SORT_USERS_BY_FIRST:
      return{
        ...state,
        users: state.users.sort((a, b) => {
          if(a.name.first < b.name.first) {return -1};
          if(a.name.first > b.name.first) {return 1};
          return 0;
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