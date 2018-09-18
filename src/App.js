import React, { Component } from 'react';
import IronNavbar from './IronNavbar';
import HomePage from './HomePage';
import DiscoverPage from './DiscoverPage';
import JoinPage from './JoinPage';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IronNavbar />
        <Container>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/join" component={JoinPage} />
            <Route path="/discover" component={DiscoverPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
