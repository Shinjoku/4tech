import React, { Component } from 'react';

import Header from './components/navigation/Header/Header';
import Container from './components/page/Container/Container';
import Deck from './components/page/Deck/Deck';
import JobForm from './components/jobs/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <JobForm/>
          <br/>
          <Deck/>
        </Container>
      </div>
    );
  }
}

export default App;
