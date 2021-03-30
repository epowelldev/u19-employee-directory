import {useReducer, useEffect} from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import {
  CLEAR_FILTER,
  FILTER_USERS,
  NEW_USERS,
  SORT_USERS_BY_FIRST,
} from "../types";

import axios from "axios";

const AppState = props => {
  const initialState = {
    users: [],
    filtered: null
  };

  const userQuantity = 27;
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${userQuantity}`)
      .then(res => {
        console.log(res.data.results);
        saveRandomUsers(res.data.results);
      })
      .catch((err) => console.log(err))
  }, [] );

  const [state, dispatch] = useReducer(appReducer, initialState);

  //random users api call dispatch to state
  const saveRandomUsers = users => {
    dispatch({type: NEW_USERS, payload: users})
  };

  //Filter Contacts
  const filterUsers = text => {
    dispatch({type: FILTER_USERS, payload: text});
  }
  //Clear Filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
  }

  //Sort users by first name 
  const sortUsersByFirst = (event, users) => {
    event.preventDefault();
    dispatch({type: SORT_USERS_BY_FIRST, payload: users});
  }

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        user: state.user,
        filtered: state.filtered,
        clearFilter,
        filterUsers,
        saveRandomUsers,
        sortUsersByFirst,
      }}>
        {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
