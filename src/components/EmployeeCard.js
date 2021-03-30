import { Fragment } from "react";
import { Card } from "react-bootstrap";

const EmployeeCard = ({user}) => {
  return(
    <Fragment>
      <Card style={{display:"flex",flexDirection:"row"}} >
        <Card.Img style={{width:"175px",height:"175px"}} src={user.picture.large} />
        <Card.Body>
          <Card.Title>{user.name.first} {user.name.last}, AKA {user.login.username}</Card.Title>
          <Card.Text style={{flexWrap:"wrap"}}>
            {user.location.city}, {user.location.state}
              <br /> {user.location.country}, {user.location.postcode}
            <br/>{user.email}
              <br />{user.phone}
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};


export default EmployeeCard;
