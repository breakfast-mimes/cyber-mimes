import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col, PageHeader } from 'react-bootstrap';

const LogIn = React.createClass({
  getInitialState() {
    return {
      name: '',
      pass: '',
      wrong: false
    }
  },

  updateName(event) {
    this.setState({name: event.target.value});
  },

  updatePass(event) {
    this.setState({pass: event.target.value});
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

  allValid() {
    return !(this.getValidationUsername() === 'success'
      && this.getValidationPassword() === 'success');
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.name, this.state.pass);
  },


  render() {
    return (
      <Form horizontal>

        <PageHeader>
          <Col smOffset={2}>
            Login <small>wanna play right?</small>
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
          {this.getValidationUsername() !== 'success' ?
          <Col sm={2}>
            <HelpBlock>Please enter a username.</HelpBlock>
          </Col>
          : null
          }
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
          {this.getValidationPassword() !== 'success' ?
          <Col sm={2}>
            <HelpBlock>Please enter a password.</HelpBlock>
          </Col>
          : null
          }
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button disabled={this.allValid()} type="submit" onClick={this.handleSubmit}>
              Login
            </Button>
          </Col>
        </FormGroup>

      </Form>
    )
  }
});

export default LogIn;