import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/app/appContext";

const UserFilter = () => {
  const appContext = useContext(AppContext);
  const text = useRef("");
  const {filterUsers, clearFilter, filtered, sortUsersByFirst} = appContext;

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
    <form style={{display:"flex",justifyContent:"space-around",padding:"5px"}}>
      <input ref={text} type="text" placeholder="Filter Users..." onChange={onChange}
        style={{
          width:"350px",
          padding:"5px",
      }} />
      <button onClick={sortUsersByFirst} style={{backgroundColor:"white"}}>Sort by First Name</button>
    </form>
  );
}

export default UserFilter;
