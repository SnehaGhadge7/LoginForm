import React, { Component } from "react";
import { Form, Col, Row, Button, NavLink } from "react-bootstrap";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starters: "",
      main: "",
      desserts: "",
    };
  }



  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form.Control as="select" onCh>
              <option>--Select Starters--</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Control as="select">
              <option>--Select Deserts--</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </Form.Control>
          </Col>
        </Row>
      </div>
    );
  }
}
