import React, { Component } from 'react';
import {
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default class DiscoverPage extends Component {
  render() {
    return (
      <div className="DiscoverPage text-center">
        <h1>Discover</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel distinctio nihil sint inventore molestias, nisi animi voluptas eaque sequi voluptatibus quibusdam iste facilis, ipsa nesciunt perferendis optio iure assumenda quisquam.
        Quae temporibus officia facilis nostrum, ducimus debitis, et, aperiam maiores sequi fuga in totam sed deleniti laudantium dolorem expedita nesciunt molestiae similique quas ullam beatae incidunt dolore ipsam deserunt! Quis?
        Libero, quae nostrum corrupti quaerat non quasi magnam eligendi fugiat officia quia consectetur dolorum nam consequuntur vel vero, iusto at animi, sint totam exercitationem. In repellat expedita perferendis neque architecto!</p>
        <img src="/images/solar-system.png" className="mt-3" alt="" />

        <Button tag={Link} to="/join" block color="primary" className="mt-3">Join a crew</Button>
      </div>
    );
  }
}
