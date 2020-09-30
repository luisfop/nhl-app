import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Welcome from "./pages/Welcome/Welcome";

import { Container, Row, Col } from "react-bootstrap/";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid="true">
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/home" component={Home} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
