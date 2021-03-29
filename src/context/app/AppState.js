import {useReducer} from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import {
  CLEAR_FILTER,
  FILTER_USERS,
} from "../types";

import testData from "../../testdata.json";

const AppState = props => {
  const initialState = {
    users: testData,
    filtered: null
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  //function 1

  //Filter Contacts
  const filterUsers = text => {
    dispatch({type: FILTER_USERS, payload: text});
  }
  //Clear Filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER});
  }

  return (
    <AppContext.Provider
      value={{
        users: state.users,
        filtered: state.filtered,
        clearFilter,
        filterUsers,
      }}>
        {props.children}
      </AppContext.Provider>
  );
};

export default AppState;
