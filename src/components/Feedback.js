import React, { Component } from "react";
import {
  Card,
  Container,
  Form,
  Col,
  Row,
  Button,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      dine: "",
      quality: "",
      hygiene: "",
      service: " ",
      experience: "",
      comments: "",
      errors: [],
      formClicked: false,
      isLoading: false,
    };
  }

  handleChange = (event) => {
    console.log("Handle Change: ", event);

    // if (event.target.value === "") {
    //   this.setState({
    //     // errors: [...this.state.errors, event.target.name],
    //     [event.target.name]: event.target.value,
    //   });
    // } else {
    //   // const errorClone = this.state.errors;
    //   // const filteredErrors = errorClone.filter((element) => element !== event.target.name);
    //   this.setState({ [event.target.name]: event.target.value, errors: filteredErrors });

    // }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  validate = () => {
    if (
      this.state.email === "" ||
      this.state.dine === "" ||
      this.state.quality === "" ||
      this.state.service === "" ||
      this.state.experience === ""
    ) {
      return false;
    }
    return true;
  };

  // validate = () => {
  //   if (!this.state.email.includes("@")) {
  //     this.setState({ emailError: "*Invalid Email Id" });
  //   }
  //   if (!this.state.name === "") {
  //     this.setState({ nameError: "*Invalid name" });
  //   }
  //   if (this.state.dine === "") {
  //     this.setState({ dineError: "*Please enter a response" });
  //   }
  // };

  onSubmitClick = async (event) => {
    this.setState({ isLoading: true, formClicked: true });
    event.preventDefault();
    if (this.validate()) {
      alert("form has been submitted");
    }

    try {
      // const response = await axios.post(``, payload);
      setTimeout(() => {
        this.setState({ isLoading: false, formClicked: true });
      }, 3000);
    } catch (err) {
      console.log("ERROR", err);
      setTimeout(() => {
        this.setState({ isLoading: false, formClicked: true });
      }, 3000);
      // this.setState({ isLoading: false, formClicked: true });
    }
  };

  render() {
    console.log("State: ", this.state);
    return (
      <>
        <div className="feedback p-1 d-flex justify-content-end">
          <div className="feedback-card">
            <h4 className="ml-5">Your perception is our REALITY !!</h4>

            <Row className="p-3">
              <Col sm={3}>
                <Form.Label className="custom-label">
                  Dine In / Take Out{" "}
                  {this.state.dine === "" && this.state.formClicked ? (
                    <span className="label-error">*Required</span>
                  ) : null}
                </Form.Label>
              </Col>
              <Col sm={3} className="custom-options">
                <Form.Check
                  label="Dine In"
                  type="radio"
                  name="dine"
                  value="dine"
                  checked={this.state.dine === "dine"}
                  onChange={this.handleChange}
                />
                <Form.Check
                  label="Take Out"
                  type="radio"
                  name="dine"
                  checked={this.state.dine === "take"}
                  value="take"
                  onChange={this.handleChange}
                />
                <p className="formError">{this.state.dineError}</p>
              </Col>
            </Row>

            <Row className="p-3">
              <Col sm={6}>
                <Form.Label className="ml-5 custom-label">
                  Food Quality{" "}
                  {this.state.quality === "" && this.state.formClicked ? (
                    <span className="label-error">*Required</span>
                  ) : null}
                </Form.Label>

                <Col sm={6} className="ml-5 custom-options">
                  <Form.Check
                    type="radio"
                    label="Excellent"
                    name="quality"
                    value="excellent"
                    checked={this.state.quality === "excellent"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Good"
                    name="quality"
                    value="Good"
                    checked={this.state.quality === "Good"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Average"
                    name="quality"
                    value="Average"
                    checked={this.state.quality === "Average"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Dissatisfied"
                    name="quality"
                    value="Dissatisfied"
                    checked={this.state.quality === "Dissatisfied"}
                    onChange={this.handleChange}
                  />
                </Col>
              </Col>

              <Col sm={6}>
                <Form.Label className="ml-5 custom-label">
                  Service{" "}
                  {this.state.Service === "" && this.state.formClicked ? (
                    <span className="label-error">*Required</span>
                  ) : null}
                </Form.Label>

                <Col sm={6} className="ml-3 custom-options">
                  <Form.Check
                    type="radio"
                    label="Excellent"
                    name="service"
                    value="Excellent"
                    checked={this.state.service === "Excellent"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Good"
                    name="service"
                    value="Good"
                    checked={this.state.service === "Good"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Average"
                    name="service"
                    value="Average"
                    checked={this.state.service === "Average"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Dissatisfied"
                    name="service"
                    value="Dissatisfied"
                    checked={this.state.service === "Dissatisfied"}
                    onChange={this.handleChange}
                  />
                </Col>
              </Col>
            </Row>

            <Row className="p-3">
              <Col sm={6}>
                <Form.Label className="ml-5 custom-label">
                  Hygiene
                  {this.state.hygiene === "" && this.state.formClicked ? (
                    <span className="label-error">*Required</span>
                  ) : null}
                </Form.Label>

                <Col sm={6} className="ml-5 custom-options">
                  <Form.Check
                    type="radio"
                    label="Excellent"
                    name="hygiene"
                    value="excellent"
                    checked={this.state.hygiene === "excellent"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Good"
                    name="hygiene"
                    value="Good"
                    checked={this.state.hygiene === "Good"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Average"
                    name="hygiene"
                    value="Average"
                    checked={this.state.hygiene === "Average"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Dissatisfied"
                    name="hygiene"
                    value="Dissatisfied"
                    checked={this.state.hygiene === "Dissatisfied"}
                    onChange={this.handleChange}
                  />
                </Col>
              </Col>

              <Col sm={6}>
                <Form.Label className="ml-3 custom-label">
                  Overall Experience
                  {this.state.experience === "" &&
                  this.state.formClicked ? (
                    <span className="label-error">*Required</span>
                  ) : null}
                </Form.Label>

                <Col sm={6} className="ml-3 custom-options">
                  <Form.Check
                    type="radio"
                    label="Excellent"
                    name="experience"
                    value="Excellent"
                    checked={this.state.experience === "Excellent"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Good"
                    name="experience"
                    value="Good"
                    checked={this.state.experience === "Good"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Average"
                    name="experience"
                    value="Average"
                    checked={this.state.experience === "Average"}
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Dissatisfied"
                    name="experience"
                    value="Dissatisfied"
                    checked={this.state.experience === "Dissatisfied"}
                    onChange={this.handleChange}
                  />
                </Col>
              </Col>
            </Row>

            <Row className="p-3">
              <Col sm={6}>
                <Form.Label className="ml-5 custom-label">
                  Any comments
                  {this.state.comments === "" &&
                  this.state.formClicked ? (
                    <span className="label-error">*Required</span>
                  ) : null}
                </Form.Label>
              </Col>
              <Col sm={5} className="textarea custom-options">
                <Form.Control
                  type="text"
                  required
                  name="comments"
                  maxLength={250}
                  value={this.state.comments}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>

            <Row className="p-3">
              <Col className="form-field">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                {this.state.name === "" && this.state.formClicked ? (
                  <span className="label-error">*Required</span>
                ) : null}
              </Col>

              <Col>
                <Form.Control
                  className="d-flex w3-input w3-border w3-round"
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {this.state.email === "" && this.state.formClicked ? (
                  <span className="label-error">*Required</span>
                ) : null}
              </Col>

              <Col>
                <Form.Control
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </Col>

              <Button
                className="p-1 mr-2"
                type="submit"
                onClick={this.onSubmitClick}
              >
                {this.state.isLoading ? "Loading" : "Submit"}
              </Button>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
