import React, { Component } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import Loading from '../../navigation/Loading/Loading';
import JobForm from '../JobForm/JobForm';
import Collapse from '../../hoc/Collapse/Collapse';


class Deck extends Component {

  state = {
    deck: [],
    isLoading: true
  }

  // Handlers

  addItemToDeck = (newItem) => {
    let currentJobs = this.state.deck;

    currentJobs.push(newItem);
    this.setState({jobs: currentJobs});
  }

  editCardHandler = (cardId, cardName) => {
    alert('O item foi atualizado!');
  }

  removeCardHandler = (cardId, cardName) => {

    if(window.confirm(`Excluir o card "${cardName}" ?`)) {
      this.deleteJob(cardId);
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
              id={job.id}
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
      <div>
        <Collapse>
          <JobForm addToDeck={this.addItemToDeck}/>
        </Collapse>
        <div className="row justify-content-md-center mt-3">
          { jobsFound }
        </div>
      </div>
    );
  }


  // Aux functions

  getJobs = async () => await
    axios.get('/jobs')
      .then(res => this.setState({deck: res.data, isLoading: false}))
      .catch(err => console.log(err));


  deleteJob = async (id) => await
    axios.delete('/jobs/' + id)
      .then(res => {
        let vagas = this.state.deck;
        const indexRemoved = vagas.findIndex(item => item.id === id);

        vagas.splice(indexRemoved, 1);
        this.setState({deck: vagas});
      })
      .catch(err => console.log(err));

}

export default Deck;
