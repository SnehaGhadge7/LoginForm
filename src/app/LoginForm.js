import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import Button from "../components/Button";
import "../App.css";

export default function LoginForm() {
  // const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);

  console.log(email, password);

  function validate() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login">
      <Form className="loginform" onsubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Control
            className="loginemail"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            className="loginpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        {/* <Button
          className="loginsubmit"
          
          type="submit"
        ></Button>

        <Button>Submit</Button> */}
      </Form>
    </div>
  );
}
