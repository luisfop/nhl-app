import React from "react";

import "./App.css";
import Home from "./pages/Home";
import { Container, Row, Col } from "react-bootstrap/";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Home/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
