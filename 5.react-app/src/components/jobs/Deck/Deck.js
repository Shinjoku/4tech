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

    if(window.confirm(`Excluir o card "${cardName}" ?`)) {
      this.deleteJob(cardId);
      this.getJobs();
    }
    else alert('Card mantido');
  }


  // Life Cycle functions

  componentWillMount() {
    this.getJobs();
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
    const res = await fetch('/jobs/' + id, {method: verb});
    const body = res.json();

    if(res.status !== 200) throw Error(body.message);

    return body;
  }

  getJobs = async () => await
    this.callApi('get')
      .then(res => this.setState({deck: res}))
      .catch(err => console.log(err));


  deleteJob = async (id) => await
    this.callApi('delete', id)
      .then(res => alert(`Card deletado com sucesso`))
      .catch(err => console.log(err));

}

export default Deck;
