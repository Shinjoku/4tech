import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/navigation/Header/Header';
import Container from './components/page/Container/Container';
import Deck from './components/jobs/Deck/Deck';
import About from './components/About/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <Switch>
            <Route exact path='/' component={ Deck }></Route>
            <Route path='/vagas' component={ Deck }></Route>
            <Route path='/about' component={ About }></Route>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
