import React, { Component } from 'react';

import Card from '../Card/Card';

class Deck extends Component {

  state = {
    deck: []
  }

  // Handlers

  editCardHandler = (cardId, cardName) => {
    alert('O item foi atualizado!');
  }

  removeCardHandler = (cardId, cardName) => {

    let confirm = window.confirm(`Excluir o card "${cardName}" ?`);
    if(confirm) {
      this.callApi('delete', cardId)
      .then(res => {alert(`Card ${cardName} excluído com sucesso!`)})
      .catch(err => console.log(err));
    }
    else alert('Card mantido');
  }


  // Life Cycle functions

  componentDidMount() {

    this.callApi('get')
      .then(res => this.setState({deck: res}))
      .catch(err => console.log(err));
  }

  render() {
    // Shuffle Cards
    let jobsFound = [];

    jobsFound = this.state.deck.map( (job, index) => (
      <Card
        key={index}
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
        { jobsFound }
      </div>
    );
  }


  // Aux functions

  callApi = async (verb, cardId) => {
    let id = cardId === undefined ? "" : cardId;
    console.log(id);
    const res = await fetch('http://localhost:8000/jobs/' + id, {method: verb});
    const body = res.json();

    if(res.status !== 200) throw Error(body.message);

    return body;
  }
}

export default Deck;
