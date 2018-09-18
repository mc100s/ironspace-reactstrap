import React, { Component } from 'react';
import {
  Button,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  FormText,
} from 'reactstrap';

export default class JoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      planet: '',
      motivation: '',
      showInvalid: false,
      isFormSent: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.areFieldsAllValid()) {
      this.setState({
        isFormSent: true
      })
    }
    else {
      this.setState({
        showInvalid: true
      })
    }
  }
  isFieldValid(value) {
    switch (value) {
      case 'firstName': return this.state.firstName.length >= 2
      case 'lastName': return this.state.lastName.length >= 2
      case 'planet': return !!this.state.planet
      case 'motivation': return this.state.motivation.length >= 30
      default: return false
    }
  }
  areFieldsAllValid() {
    return this.isFieldValid('firstName')
      && this.isFieldValid('lastName')
      && this.isFieldValid('planet')
      && this.isFieldValid('motivation')
  }
  render() {
    let planets = ['', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    return (
      <div className="JoinPage">
        <h1 className="text-center">Join a future crew</h1>

        {this.state.isFormSent && <h2 className="text-center">Submission sent!!</h2>}

        {!this.state.isFormSent && <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={4}>First Name</Label>
            <Col sm={8}>
              <Input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                valid={this.isFieldValid('firstName')}
                invalid={this.state.showInvalid && !this.isFieldValid('firstName')} />
              {!this.isFieldValid('firstName') && <FormText>Enter at least 2 characters</FormText>}

            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleEmail" sm={4}>Last Name</Label>
            <Col sm={8}>
              <Input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                valid={this.isFieldValid('lastName')}
                invalid={this.state.showInvalid && !this.isFieldValid('lastName')} />
              {!this.isFieldValid('lastName') && <FormText>Enter at least 2 characters</FormText>}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleEmail" sm={4}>Planet destination</Label>
            <Col sm={8}>
              <Input
                type="select"
                name="planet"
                value={this.state.planet}
                onChange={this.handleChange}
                valid={this.isFieldValid('planet')}
                invalid={this.state.showInvalid && !this.isFieldValid('planet')}>
                {planets.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </Input>
              {!this.isFieldValid('planet') && <FormText>Choose the planet where you want to go</FormText>}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={4}>Motivation</Label>
            <Col sm={8}>
              <Input
                type="textarea"
                name="motivation"
                value={this.state.motivation}
                onChange={this.handleChange}
                valid={this.isFieldValid('motivation')}
                invalid={this.state.showInvalid && !this.isFieldValid('motivation')} />
              {!this.isFieldValid('motivation') && <FormText>Enter at least {30 - this.state.motivation.length} more characters</FormText>}
            </Col>
          </FormGroup>

          <Button color="primary" block>
            Apply for the next mission {this.state.planet && ("to " + this.state.planet)}
          </Button>

        </Form>}
      </div >
    );
  }
}
