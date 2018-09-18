import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Button,
} from 'reactstrap';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="HomePage text-center">
        <h1>IronSpace</h1>
        <p className="lead">Our mission is to send humans in the outer space!</p>
        <Button tag={Link} color="primary" outline to={"/discover"}>Discover IronSpace</Button>
        {' '}
        <Button tag={Link} color="primary" outline to={"/join"}>Join a crew</Button>
      </div>
    );
  }
}
