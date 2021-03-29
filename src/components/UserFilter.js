import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/app/appContext";

const UserFilter = () => {
  const appContext = useContext(AppContext);
  const text = useRef("");
  const {filterUsers, clearFilter, filtered} = appContext;

  useEffect( () => {
    if(filtered === null) {
      text.current.value = ""
    }
  });

  const onChange = e => {
    if(text.current.value !== "") {
      filterUsers(e.target.value);
    } else {
      clearFilter();
    }
  }

  return (
    <form>
      <input ref={text} type="text" placeholder="Filter Users..." onChange={onChange} />
    </form>
  );
}

export default UserFilter;
