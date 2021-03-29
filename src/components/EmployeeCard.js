import { Fragment, useContext } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import AppContext from "../context/app/appContext";

const EmployeeCard = ({user}) => {
  const appContext = useContext(AppContext);
  const {users} = appContext;

  return(
    <Fragment>
      <Card style={{display:"flex",flexDirection:"row"}} >
        <Card.Img style={{width:"150px"}} src={user.picture.thumbnail} />
        <Card.Body>
          <Card.Title>{user.name.first} {user.name.last}, AKA {user.login.username}</Card.Title>
          <Card.Text style={{flexWrap:"wrap"}}>
            <p>{user.location.city}, {user.location.state}</p>
            <p>{user.email}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

EmployeeCard.propTypes = {
  users: PropTypes.object.isRequired
}

export default EmployeeCard;
