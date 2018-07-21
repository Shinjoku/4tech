import React, { Component } from 'react';

import Card from '../Card/Card';
import Jobs from '../JobList/JobList';

class Deck extends Component {

  state = {
    deck: []
  }

  constructor(props) {
    super(props);
    this.deck = [];
  }

  editCardHandler = (cardId, cardName) => {
    alert('O item foi atualizado!');
  }

  removeCardHandler = (cardId, cardName) => {
    let confirm = window.confirm(`Excluir o card "${cardName}" ?`);
    if(confirm) alert(`Card ${cardName} excluído com sucesso!`);
    else alert('Card mantido');
  }

  // Life Cycle functions

  componentDidMount() {
    this.setState({deck: Jobs});
  }

  render() {

    // Shuffle Cards
    this.state.deck.forEach( job =>
      this.deck.push(<Card
        id={job.id}
        name={job.name}
        description={job.description}
        area={job.area}
        salary={'R$ ' + job.salary + '.00'}
        removeCardHandler={() => this.removeCardHandler(job.id, job.name)}
        editCardHandler={() => this.editCardHandler(job.id, job.name)}/>
      )
    );

    return (
      <div className="row justify-content-md-center mt-3">
        { this.deck }
      </div>
    );
  }
}

export default Deck;
