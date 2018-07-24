import React, { Component } from 'react';

import Header from './components/navigation/Header/Header';
import Container from './components/page/Container/Container';
import Deck from './components/jobs/Deck/Deck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <br/>
          <Deck/>
        </Container>
      </div>
    );
  }
}

export default App;
