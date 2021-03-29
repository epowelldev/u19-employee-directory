import { Fragment, useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import AppContext from "../context/app/appContext";
import BasicGrid from "./BasicGrid";
import UserFilter from "./UserFilter";

const Body = () => {
  const appContext = useContext(AppContext);
  const {users, filtered} = appContext;

  // if(users.length === 0) {
  //   return <h1>Please load an employee list.</h1>
  // }

  return (
    <Fragment>

      <BasicGrid>

        <UserFilter />

        {filtered !== null
          ? filtered.map(user => (
            <EmployeeCard user={user} /> ))
          : users.map(user => (
            <EmployeeCard user={user} />
          ))
        }
      </BasicGrid>

    </Fragment>
  );
};

export default Body;
