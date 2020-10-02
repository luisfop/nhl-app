import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {DET}  from "../../Assets/teamsLogo/index";

const TeamCard = ({ name }) => {

    const teste = <DET/>;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {teste}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;
