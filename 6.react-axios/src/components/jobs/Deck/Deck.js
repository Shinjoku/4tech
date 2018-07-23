import React, { Component } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import Loading from '../../navigation/Loading/Loading';


class Deck extends Component {

  state = {
    deck: [],
    isLoading: true
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

  componentDidMount() {
    this.getJobs();
  }

  render() {

    if(this.state.isLoading === true){
        return ( <Loading/> );
    }
    // Shuffle Cards
    let jobsFound = [];

    jobsFound = this.state.deck.map( (job, index) => {
        return (

            <Card
              key={index}
              name={job.name}
              description={job.description}
              area={job.area}
              salary={'R$ ' + job.salary + '.00'}
              removeCardHandler={() => this.removeCardHandler(job.id, job.name)}
              editCardHandler={() => this.editCardHandler(job.id, job.name)}
            />

        )
    }
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
    // this.callApi('get')
    //   .then(res => { for(let i = 0; i < 1000; i++) this.setState({deck: res, isLoading: false})})
    //   .catch(err => console.log(err));

    axios.get('/jobs')
      .then(res => this.setState({deck: res.data, isLoading: false}))
      .catch(err => console.log(err));


  deleteJob = async (id) => await
    axios.delete('/jobs/' + id)
      .then(res => window.alert('Card removido'))
      .catch(err => console.log(err));

}

export default Deck;
