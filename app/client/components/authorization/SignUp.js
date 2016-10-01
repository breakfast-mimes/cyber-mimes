import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col, PageHeader } from 'react-bootstrap';

const SignUp = React.createClass({
  getInitialState() {
    return {
      name: '',
      pass: '',
      pass2: ''
    }
  },

  updateName(event) {
    this.setState({name: event.target.value});
  },

  updatePass(event) {
    this.setState({pass: event.target.value});
  },

  updatePass2(event) {
    this.setState({pass2: event.target.value});
  },

  getValidationUsername() {
    const length = this.state.name.length;
    if (length > 0) return 'success';
    else if (length > 20) return 'warning';
    else if (length <= 0) return 'error';
  },

  getValidationPassword() {
    const length = this.state.pass.length;
    if (length > 0) return 'success';
    else if (length > 20) return 'warning';
    else if (length <= 0) return 'error';
  },

  getValidationPassword2() {
    return (this.state.pass !== '' && this.state.pass === this.state.pass2) ? 'success' : 'error';
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state.name, this.state.pass);
  },


  render() {
    return (
      <Form horizontal>

        <PageHeader>
          <Col smOffset={2}>
            Sign Up <small>need an account?</small>
          </Col>
        </PageHeader>

        <FormGroup
          controlId="formUsername"
          validationState={this.getValidationUsername()}>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={2}>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Username"
              onChange={this.updateName} />
            <FormControl.Feedback />
          </Col>
          <Col sm={2}>
            <HelpBlock>Please enter a username.</HelpBlock>
          </Col>
        </FormGroup>

        <FormGroup
          controlId="formPassword"
          validationState={this.getValidationPassword()}>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={2}>
            <FormControl
              type="password"
              value={this.state.pass}
              placeholder="Password"
              onChange={this.updatePass} />
            <FormControl.Feedback />
          </Col>
          <Col sm={2}>
            <HelpBlock>Please enter a password.</HelpBlock>
          </Col>
        </FormGroup>

        <FormGroup
          controlId="formPassword2"
          validationState={this.getValidationPassword2()}>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={2}>
            <FormControl
              type="password"
              value={this.state.pass2}
              placeholder="Password"
              onChange={this.updatePass2} />
            <FormControl.Feedback />
          </Col>
          <Col sm={2}>
            <HelpBlock>Passwords must match.</HelpBlock>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.handleSubmit}>
              Login
            </Button>
          </Col>
        </FormGroup>

      </Form>
    )
  }
});

export default SignUp;