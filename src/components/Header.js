import React from "react"
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <Jumbotron fluid style={{backgroundColor:"#70c274",color:"black"}}>
      <Container style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1>Employee Directory</h1>
        <h5>Find the one you are looking for...</h5>
      </Container>
    </Jumbotron>
  );
}

export default Header;
