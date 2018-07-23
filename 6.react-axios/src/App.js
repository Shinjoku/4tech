import React, { Component } from 'react';

import Header from './components/navigation/Header/Header';
import Container from './components/page/Container/Container';
import Deck from './components/jobs/Deck/Deck';
import Collapse from './components/hoc/Collapse/Collapse';
import JobForm from './components/jobs/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          <Collapse>
            <JobForm/>
          </Collapse>
          <br/>
          <Deck/>
        </Container>
      </div>
    );
  }
}

export default App;
